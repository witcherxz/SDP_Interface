import { Get, Post, Route, Body } from "tsoa";
import { executeShellCommand } from '../services/ssh';

interface NavReq {
  x: number;
  y: number;
}

@Route("nav")
export default class NavController {
  @Post("/")
  public async goToGoal(@Body() body: NavReq): Promise<NavReq> {
    // executeShellCommand(`~/t05/SDP/run_project_node.bash ${body.x} ${body.y}`);
    const { x, y } = body;

    if (isNaN(x) || isNaN(y)) {
      console.log('====================================');
      console.log(`Bad Req ${body.x} ${body.y}`);
      console.log('====================================');
      return {x: x, y: y};
    }
    executeShellCommand(`~/t05/SDP/run_project.bash ${body.x} ${body.y}`);
    return body;
  }
}
