/** @type {import('next').NextConfig} */
import withPWAInit from "@imbios/next-pwa";
const isDev = process.env.NODE_ENV !== "production";

const withPWA = withPWAInit({
  // your other config
  exclude: [
    // add buildExcludes here
    ({ asset }: { asset: { name: string } }) => {
      if (
        asset.name.startsWith("server/") ||
        asset.name.match(
          /^((app-|^)build-manifest\.json|react-loadable-manifest\.json)$/
        )
      ) {
        return true;
      }
      if (isDev && !asset.name.startsWith("static/runtime/")) {
        return true;
      }
      return false;
    },
  ],
});

const nextConfig = {
  images: {
    domains: ["picsum.photos", "cdn.auth0.com"],
  },
  distDir: "build",
  productionBrowserSourceMaps: true,
  experimental: {
    turbo: {
      enabled: true,
    },
  },
};

module.exports = withPWA(nextConfig);
