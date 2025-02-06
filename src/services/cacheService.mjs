import redis from "../config/redisConfig.mjs";

export async function getCachedResponse(key) {
  const cachedData = await redis.get(key);
  return cachedData ? JSON.parse(cachedData) : null;
}

export async function setCachedResponse(key, data, ttl = 60) {
  await redis.setex(key, ttl, JSON.stringify(data));
}
