import express, { Application, Request, Response } from "express";
import cors from 'cors';
import morgan from "morgan";
import swaggerUi from "swagger-ui-express";

import Router from "./routes/router";

const PORT = process.env.PORT || 8000;

const app: Application = express();

app.use(express.json());
app.use(morgan("tiny"));
app.use(express.static("docs"));
// Enable CORS
app.use(cors());
app.use(
  "/docs",
  swaggerUi.serve,
  swaggerUi.setup(undefined, {
    swaggerOptions: {
      url: "/swagger.json",
    },
  })
);

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
app.use(Router);