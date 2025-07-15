import { semanticSearch } from "../services/searchService.mjs";
import { modelInputSchema } from "../validators/modelValidator.mjs";

export async function searchQuery(req, res) {
  try {
    const validation = modelInputSchema.safeParse(req.body);
    if (!validation.success) {
      return res.status(400).json({ error: validation.error.errors[0].message });
    }

    const { query, model } = req.body;
    const result = await semanticSearch(query, model);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
