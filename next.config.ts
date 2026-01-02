import type { NextConfig } from "next";

// const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // output: isProd ? "export" : undefined,
  // output: "export",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
