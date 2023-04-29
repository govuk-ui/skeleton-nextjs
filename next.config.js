const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Needed for docker,
  env: {
    SESSION_COOKIE_NAME: process.env.SESSION_COOKIE_NAME || 'session_cookie',
    SESSION_STORAGE: process.env.SESSION_STORAGE || 'file', // file or redis
    REDIS_HOST: process.env.REDIS_HOST || 'localhost',
    REDIS_PORT: process.env.REDIS_PORT || 6379,
  },
  i18n,
}

module.exports = nextConfig
