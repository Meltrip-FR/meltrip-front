/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compress: false,
  optimizeFonts: false,
  distDir: "out",
  images: {
    loader: "imgix",
    path: "http://localhost:3000/",
    domains: ["https://meltrip.com", "https://www.meltrip.com"],
  },
  eslint: {
    ignoreDuringBuild: true,
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
