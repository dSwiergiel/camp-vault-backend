import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import * as middlewares from "./middlewares";
import api from "./api";
import MessageResponse from "./models/handlers/MessageResponse";

require("dotenv").config();

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "Vercel API Deployment",
  });
});

// Entry point for vercel:
// https://<VERCEL_PROJECT_URL>/api/v1/<API_ENDPOINTS>
app.use("/api/v1", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
