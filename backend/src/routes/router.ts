import express from "express";
import NavController from "../controllers/nav";
import LocController from "../controllers/loc";
import RobotController from "../controllers/robot";
import { Client, ConnectConfig } from "ssh2";

const router = express.Router();

router.post("/nav", async (_req, res) => {
  const controller = new NavController();
  await controller.goToGoal(_req.body);
  res.sendStatus(200);
});

router.get("/loc", async (_req, res) => {
  const controller = new LocController();
  const response = await controller.getPos();
  return res.send(response);
});

router.post("/robot/start", async (_req, res) => {
  const controller = RobotController.getInstance();
  await controller.start();
  res.sendStatus(200);
});


router.post("/robot/stop", async (_req, res) => {
  const controller = RobotController.getInstance();
  await controller.stop();
  res.sendStatus(200);
});


// router.post("/startRobot",async (_req) => {
//   const controller = new RobotController();
//   const response = await controller.getPos();
// })
export default router;