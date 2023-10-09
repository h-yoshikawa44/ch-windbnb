/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  compiler: {
    emotion: true,
  },
};

module.exports = nextConfig;
