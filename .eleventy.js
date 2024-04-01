const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function(eleventyConfig) {
    let markdownLibrary = markdownIt({
        html: true,
        breaks: true,
        linkify: true
    });
    
    markdownLibrary.use(markdownItAnchor, {
        permalink: true,
        permalinkClass: "direct-link",
        permalinkSymbol: "#"
    });

    eleventyConfig.setLibrary("md", markdownLibrary);

    eleventyConfig.addPassthroughCopy("assets", "assets");
    eleventyConfig.addPassthroughCopy("_data/stations.json", "stations.json");
};