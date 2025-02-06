import rateLimit from "express-rate-limit";
import RedisStore from "rate-limit-redis";
import redis from "../config/redisConfig.mjs";

const rateLimiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redis.call(...args),
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Max 100 requests per window
  handler: (req, res) => {
    res.status(429).json({ error: "Too many requests, please try again later." });
  },
  keyGenerator: (req) => req.ip, // Rate limit per IP
});

export default rateLimiter;
