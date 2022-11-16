/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  compress: false,
  optimizeFonts: false,
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
  output: "standalone",
  distDir: "out",
};

// const securityHeaders = [];
// module.exports = {
//   async headers() {
//     return [
//       {
//         // Apply these headers to all routes in your application.
//         source: "/:path*",
//         headers: securityHeaders,
//       },
//     ];
//   },
// };
