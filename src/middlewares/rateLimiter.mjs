import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redis from "../config/redisConfig.mjs";

const rateLimiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redis.call(...args),
  }),/**
 * Get full model technical name from alias like "chatgpt"
 */
  windowMs: 15 * 60 * 1000,
  max: 100,
  handler: (req, res) => {
    res.status(429).json({ error: "Too many requests, please try again later." });
  },
  keyGenerator: (req) => req.ip,
});

export default rateLimiter;
