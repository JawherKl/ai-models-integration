import express from "express";
import { listAvailableModels } from "../services/providerService.mjs";

const router = express.Router();

router.get("/", (req, res) => {
  const models = listAvailableModels();
  res.json({ models });
});

export default router;
