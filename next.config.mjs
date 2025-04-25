/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.(".svg"),
    );

    if (!fileLoaderRule) {
      throw new Error("SVG loader rule not found in Webpack configuration.");
    }

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] }, // exclude if *.svg?url
        use: ["@svgr/webpack"],
      },
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

    return config;
  },
  experimental: {
    // Используйте turbo только если это необходимо
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
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
