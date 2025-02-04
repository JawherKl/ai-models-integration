import express from "express";
import { semanticSearch } from "./search.mjs";
import { analyzeData } from "./analyze.mjs";

const app = express();
app.use(express.json());
app.post("/search", async (req, res) => {
  try {
    const result = await semanticSearch(req.body.query, req.body.model);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.post("/analyze", async (req, res) => {
  try {
    const analysis = await analyzeData(req.body.text, req.body.model);
    res.json({ analysis });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});