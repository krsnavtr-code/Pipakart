/**
 * @fileOverview Utility module for loading images from a specified directory using Webpack's require.context.
 * @module ImageLoader
 */

/**
 * Load images from the specified Webpack context and return them as an object.
 * @param {Object} context - Webpack context for image files.
 * @returns {Object} - Object containing image assets with keys as asset names.
 */
const loadImages = (context) => {
  return context.keys().reduce((assets, key) => {
    // Extract asset name by removing path and file extension
    const assetName = key.replace("./", "").replace(/\.(png|jpe?g|svg)$/, "");
    // Add the asset to the assets object
    assets[assetName] = context(key);
    return assets;
  }, {});
};

// Webpack context for the images directory
const assetContext = require.context(
  "../Assets/images",
  false,
  /\.(png|jpe?g|svg)$/
);

// Load images from the specified context and export as assets
const assets = loadImages(assetContext);

// Export the utility function and the loaded assets
export { loadImages, assets };
