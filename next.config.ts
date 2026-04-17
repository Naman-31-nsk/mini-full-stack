/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.dummyjson.com"], // ✅ FIXED DOMAIN
  },
};

module.exports = nextConfig;