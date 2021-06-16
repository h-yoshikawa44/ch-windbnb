const withTM = require('next-transpile-modules')(['ky']);

module.exports = withTM({
  experimental: {
    eslint: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
});
