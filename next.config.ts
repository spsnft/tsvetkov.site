import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/420",
        destination: "https://420demo.vercel.app/420",
      },
      {
        source: "/420/:path*",
        destination: "https://420demo.vercel.app/420/:path*",
      },
    ];
  },
};

export default nextConfig;
