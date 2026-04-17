import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/xiaozhi/:path*',
        destination: 'http://127.0.0.1:8081/xiaozhi/:path*',
      },
    ];
  },
};

export default nextConfig;