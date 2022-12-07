/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: false,
  optimizeFonts: false,
  outDir: "public",
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

const securityHeaders = [];
module.exports = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

module.exports = nextConfig;
