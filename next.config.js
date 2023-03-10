/** @type {import('next').NextConfig} */

const DEFAULT_ADDR = process.env.DEFAULT_ADDR;
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [{
      source: "/myblog/:path*",
      destination: "/blog/:path*",
      permanent: false,
    }];
  },
  async rewrites() {
    return [{
      source: "/api/movies",
      destination: `${DEFAULT_ADDR}movie/popular?api_key=${API_KEY}`,
    }, {
      source: "/api/movies/:id",
      destination: `${DEFAULT_ADDR}movie/:id?api_key=${API_KEY}`,
    }];
  },
}

module.exports = nextConfig
