import express from "express";
import MessageResponse from "../models/handlers/MessageResponse";
import emojis from "./routes/emojis";
import campsites from "./routes/campsites";

const router = express.Router();

// router.get<{}, MessageResponse>("/", (req, res) => {
//   res.json({
//     message: "API - 👋🌎🌍🌏",
//   });
// });

router.use("/emojis", emojis);
router.use("/campsites", campsites);

export default router;
