import express from "express";
import { searchQuery } from "../controllers/searchController.mjs";

const router = express.Router();

router.post("/", searchQuery);

export default router;
