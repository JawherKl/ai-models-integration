import { z } from "zod";

export function validateSchema(schema) {
  return (req, res, next) => {
    const result = schema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: result.error.errors });
    }
    next();
  };
}

export const searchSchema = z.object({
  query: z.string().min(1, "Query must not be empty"),
  model: z.string().optional(),
});

export const analyzeSchema = z.object({
  text: z.string().min(1, "Text must not be empty"),
});
