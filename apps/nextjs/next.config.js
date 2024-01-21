const NextIntlPlugin = require("next-intl/plugin");
const withNextIntl = NextIntlPlugin("./src/i18n.ts");
const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: false,
  transpilePackages: ["ui"],
  swcMinify: true,
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200],
    loader: "default",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = withNextIntl(
  withSentryConfig(
    module.exports,
    {
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options

      // Suppresses source map uploading logs during build
      silent: true,
      org: "ventsislavnikolov",
      project: "turborepo-boilerplate",
    },
    nextConfig,
  ),
);
