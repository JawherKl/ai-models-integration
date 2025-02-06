import express from "express";
import { analyzeText } from "../controllers/analyzeController.mjs";
import { validateSchema, analyzeSchema } from "../middlewares/validateInput.mjs";

const router = express.Router();

router.post("/", validateSchema(analyzeSchema), analyzeText);

export default router;
