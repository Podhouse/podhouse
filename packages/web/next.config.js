const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withOptimizedImages = require("next-optimized-images");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPlugins([
  [
    withPWA({
      pwa: {
        dest: "public",
        runtimeCaching,
      },
    }),
  ],
  [withImages()],
  [
    withOptimizedImages({
      handleImages: ["jpeg", "png", "svg", "webp", "gif"],
      optimizeImagesInDev: true,
    }),
  ],
  [
    {
      env: {
        API_ENDPOINT: process.env.API_ENDPOINT,
      },
    },
  ],
]);
