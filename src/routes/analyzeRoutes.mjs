import express from "express";
import { analyzeText } from "../controllers/analyzeController.mjs";

const router = express.Router();

router.post("/", analyzeText);

export default router;
