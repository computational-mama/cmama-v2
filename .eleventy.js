const htmlmin = require('html-minifier')
const UpgradeHelper = require("@11ty/eleventy-upgrade-help");
const embedEverything = require("eleventy-plugin-embed-everything");
const embedYouTube = require("eleventy-plugin-youtube-embed");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const pluginCloudinaryImage = require("eleventy-plugin-cloudinary");

const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  /**
   * Upgrade helper
   * Uncomment if you need help upgrading to new major version.
   */
  //eleventyConfig.addPlugin(UpgradeHelper);

  /**
   * Files to copy
   * https://www.11ty.dev/docs/copy/
   */
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("img/fonts");

  eleventyConfig.addPlugin(embedEverything);
  eleventyConfig.addPlugin(embedYouTube);
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  /* adding date shortcode */
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  // Return all the tags used in a collection
  eleventyConfig.addFilter("getAllTags", (collection) => {
    let tagSet = new Set();
    for (let item of collection) {
      (item.data.tags || []).forEach((tag) => tagSet.add(tag));
    }
    return Array.from(tagSet);
  });

  eleventyConfig.addFilter("filterTagList", function filterTagList(tags) {
    return (tags || []).filter(
      (tag) => ["all", "nav", "post", "posts", "projects"].indexOf(tag) === -1
    );
  });

  /* adding cloudinary details */
  eleventyConfig.cloudinaryCloudName = "djdzm7lii";
    eleventyConfig.addShortcode(
      "cloudinaryImage",
      function (path, transforms, alt) {
        return `<img src="https://res.cloudinary.com/${eleventyConfig.cloudinaryCloudName}/${transforms}/${path}" alt="${alt}">`;
      }
    );
    eleventyConfig.addPlugin(pluginCloudinaryImage);

  // eleventyConfig.hostname = "https://computationalmama.xyz";

  /**
   * HTML Minifier for production builds
   */
  eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
    if (
      process.env.ELEVENTY_ENV == "production" &&
      outputPath &&
      outputPath.endsWith(".html")
    ) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  return {
    dir: {
      input: "src",
      data: "../_data",
    },
  };
};
