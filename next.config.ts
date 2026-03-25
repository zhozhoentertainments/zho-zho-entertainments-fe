import { withNextVideo } from "next-video/process";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbo: {
    rules: {
      "*.mp4": {
        as: "url",
        loaders: ["raw-loader"],
      },
      "*.MP4": {
        as: "url",
        loaders: ["raw-loader"],
      },
    },
  },
};

export default withNextVideo(nextConfig);