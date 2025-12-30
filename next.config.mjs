/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: true,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              icon: true,
            },
          },
        ],
        as: '*.js',
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.loaderpro.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "eme54.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "my.loaderpro.ru",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.cartrac.ru",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
