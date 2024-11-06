import express from "express";
import MessageResponse from "../interfaces/MessageResponse";
import emojis from "./routes/emojis";

const router = express.Router();

// router.get<{}, MessageResponse>("/", (req, res) => {
//   res.json({
//     message: "API - 👋🌎🌍🌏",
//   });
// });

router.use("/emojis", emojis);

export default router;
