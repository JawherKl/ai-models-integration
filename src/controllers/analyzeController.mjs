import { analyzeData } from "../services/analyzeService.mjs";
import { modelInputSchema } from "../validators/modelValidator.mjs";

export async function analyzeText(req, res) {
  try {
    const validation = modelInputSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.errors[0].message });
    }

    const { text, model } = req.body;
    const result = await analyzeData(text, model);
    res.json({ analysis: result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
