import express from "express";
import analyzeRoutes from "./routes/analyzeRoutes.mjs";
import searchRoutes from "./routes/searchRoutes.mjs";
import { errorHandler } from "./middlewares/errorHandler.mjs";

const app = express();
app.use(express.json());

app.use("/search", searchRoutes);
app.use("/analyze", analyzeRoutes);

app.use(errorHandler);

export default app;
