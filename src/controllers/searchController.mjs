import { semanticSearch } from "../services/searchService.mjs";

export async function searchQuery(req, res) {
  try {
    const { query, model } = req.body;
    const result = await semanticSearch(query, model);
    res.json({ result });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
