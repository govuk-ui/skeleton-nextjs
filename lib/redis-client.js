import { createClient } from 'redis';

if (!process.env.REDIS_HOST) {
  throw new Error('Invalid/Missing environment variable: "REDIS_HOST"')
}

if (!process.env.REDIS_PORT) {
  throw new Error('Invalid/Missing environment variable: "REDIS_PORT"')
}

let cachedClient = null;

export default async function connectRedis() {
  if (cachedClient) {
    return cachedClient;
  }

  console.log("No Redis client found in cache, creating new instance and caching connection")
  const client = createClient({
    socket: {
      host: process.env.REDIS_HOST,
      port: parseInt(process.env.REDIS_PORT, 10),
    }
  });
  await client.connect();
  cachedClient = client;
  return cachedClient;
}
