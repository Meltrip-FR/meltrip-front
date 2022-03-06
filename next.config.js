/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  optimizeFonts: false,
  distDir: "build",
  images: {
    domains: [
      "https://meltrip.fr",
      "https://www.meltrip.fr",
      "https://meltrip.herokuapp.com/",
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
