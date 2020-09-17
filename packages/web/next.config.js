const withPlugins = require("next-compose-plugins");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withImages = require("next-images");
const withOptimizedImages = require("next-optimized-images");

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
]);
