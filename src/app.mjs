import express from "express";
import analyzeRoutes from "./routes/analyzeRoutes.mjs";
import searchRoutes from "./routes/searchRoutes.mjs";
import modelRoutes from "./routes/modelRoutes.mjs";
import { errorHandler } from "./middlewares/errorHandler.mjs";
import rateLimiter from "./middlewares/rateLimiter.mjs";
import { trackRequests, metricsHandler } from "./middlewares/monitoring.mjs";

const app = express();
app.use(express.json());

app.use("/search", searchRoutes);
app.use("/analyze", analyzeRoutes);
app.use("/models", modelRoutes);
app.use(rateLimiter);
app.use(trackRequests);
app.get("/metrics", metricsHandler);

app.use(errorHandler);

export default app;
