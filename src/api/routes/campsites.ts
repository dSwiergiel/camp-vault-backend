import { Router, Request, Response } from "express";
import * as fs from "fs";
import * as path from "path";
import { Campsite } from "../../models/campsites/campsite";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  console.log("Getting all campsites");

  try {
    const jsonPath = path.join(
      __dirname,
      "..",
      "..",
      "data",
      "NYS_campsite_data.json"
    );
    const rawData = fs.readFileSync(jsonPath, "utf8");
    const campsites: Campsite[] = JSON.parse(rawData);

    res.status(200).json(campsites);
  } catch (error) {
    console.error("Error reading campsite data:", error);
    res.status(500).json({ error: "Failed to retrieve campsite data" });
  }
});

export default router;
