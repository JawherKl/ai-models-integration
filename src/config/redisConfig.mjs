import Redis from "ioredis";
import { config } from "dotenv";

config();

const redis = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT || 6379,
});

export default redis;
