/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Add trailing slash for better GitHub Pages compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
