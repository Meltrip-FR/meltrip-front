/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  /* config options here */
  images: {
    loader: "akamai",
    path: "https://meltrip.fr",
    domains: [
      "https://meltrip.fr",
      "https://www.meltrip.fr",
      "http://localhost:3000",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
