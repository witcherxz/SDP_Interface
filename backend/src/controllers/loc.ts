import { Get, Route } from 'tsoa';
import { executeShellCommand } from '../services/ssh';
import {sshConfig} from '../env';
import { Client } from 'ssh2';
let x: number = 0;
let y: number = 0;
let angle: number = 0;
async function executeShellCommandForLoc(): Promise<void> {
  const client = new Client();
  const passwordPrompt = /password/i; // Regular expression to match password prompt
  const locationRegex = /x: ([-0-9.]+), y: ([-0-9.]+), theta: ([-0-9.]+)/; // Regular expression to extract x, y, and theta values

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
          const matches = prompt.match(locationRegex);

          if (matches) {
            const px = parseFloat(matches[1]);
            const py = parseFloat(matches[2]);
            const ptheta = parseFloat(matches[3]);
            x = px;
            y = px;
            angle = ptheta;
            console.log('x:', px);
            console.log('y:', py);
            console.log('theta:', ptheta);

            // Do further processing with the extracted values
          }
        }
      });

      stream.on('close', () => {
        console.log('SSH shell channel closed');
        client.end();
      });

      // Send initial commands or interact with the shell channel
      stream.write(`rostopic echo /Location \n`);
    });
  }
}
interface LocRes {
  x: number;
  y: number;
  theta: number;
}

@Route('loc')
export default class LocController {

  @Get('/')
  public async getPos(): Promise<LocRes> {
    executeShellCommandForLoc();
    return { x: x, y: y, theta: angle };
  }
}
