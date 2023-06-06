import { Client } from 'ssh2';
import { sshConfig } from '../env';

export async function executeShellCommand(command: string): Promise<void> {
  const client = new Client();
  const passwordPrompt = /password/i; // Regular expression to match password prompt

  client.connect(sshConfig);

  client.on('ready', () => {
    console.log('SSH connection established');
    startShell();
  });

  client.on('error', (err) => {
    console.error('SSH connection error:', err);
  });

  function startShell() {
    client.shell((err, stream) => {
      if (err) throw err;

      stream.on('data', (data: string) => {
        const prompt = data.toString().trim();

        console.log('Received data:', prompt);

        if (passwordPrompt.test(prompt)) {
          stream.write(`${sshConfig.password}\n`);
        } else {
          // Handle other data received from the shell
        }
      });

      stream.on('close', () => {
        console.log('SSH shell channel closed');
        client.end();
      });

      // Send initial commands or interact with the shell channel
      stream.write(`${command}\n`);
    });
  }
}
