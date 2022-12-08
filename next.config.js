/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: false,
  optimizeFonts: false,
  distDir: "out",
  ignoreDuringBuilds: true,
  images: {
    loader: "imgix",
    path: "https://meltrip.fr",
    domains: [
      "https://meltrip.fr",
      "https://www.meltrip.fr",
      "http://localhost:3000",
    ],
  },
};

module.exports = nextConfig;
