import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: isProd ? "export" : undefined,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

export default nextConfig;
