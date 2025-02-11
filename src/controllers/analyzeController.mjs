import { analyzeData } from "../services/analyzeService.mjs";

export async function analyzeText(req, res) {
  try {
    const { text, model } = req.body;
    const analysis = await analyzeData(text, model);
    res.json({ analysis });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
