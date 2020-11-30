const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withOptimizedImages = require("next-optimized-images");

module.exports = withPlugins([
  [withImages()],
  [
    withOptimizedImages({
      handleImages: ["jpeg", "png", "svg", "webp", "gif"],
      optimizeImagesInDev: true,
    }),
  ],
]);
