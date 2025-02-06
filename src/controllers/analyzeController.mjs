import { analyzeData } from "../services/analyzeService.mjs";

export async function analyzeText(req, res) {
  try {
    const { text } = req.body;
    const analysis = await analyzeData(text);
    res.json({ analysis });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
