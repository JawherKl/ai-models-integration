import express from "express";
import { searchQuery } from "../controllers/searchController.mjs";
import { validateSchema, searchSchema } from "../middlewares/validateInput.mjs";

const router = express.Router();

router.post("/", validateSchema(searchSchema), searchQuery);

export default router;
