import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // Required for static export
  basePath: "/Hoom-Food",  // Replace with your GitHub repo name
  assetPrefix: "/Hoom-Food/",
};

export default nextConfig;
