import { Get, Post, Route, Body } from "tsoa";
import { executeShellCommand } from '../services/ssh';

@Route("robot")
export default class RobotController {
  private connected: boolean = false;
  private static instance: RobotController;
  // private sshClient: SSHClient;

  private constructor() {
    // this.sshClient = new SSHClient(sshConfig);
  }

  public static getInstance(): RobotController {
    if (!RobotController.instance) {
      RobotController.instance = new RobotController();
    }
    return RobotController.instance;
  }

  @Post("/start")
  public async start(): Promise<void> {
    await executeShellCommand('~/t05/SDP/robot_controller.bash run');
  }

  @Post("/stop")
  public async stop(): Promise<void> {
    await executeShellCommand('~/t05/SDP/robot_controller.bash kill');
  }
}
