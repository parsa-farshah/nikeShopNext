import type { NextConfig } from "next";
// const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  // output: isProd ? "export" : undefined,
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/parsa-farshah/**",
      },
    ],
  },
};

export default nextConfig;
