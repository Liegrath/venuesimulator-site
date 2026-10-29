// Eleventy settings. Posts live in src/blog/posts/*.md, the built site goes to _site/.
export default function (config) {
  config.addPassthroughCopy("src/assets");
  config.addPassthroughCopy("src/blog/images");
  config.addPassthroughCopy("src/CNAME");
  config.addPassthroughCopy({ "src/assets/img/icon.png": "favicon.png" });

  // Newest first; drafts (draft: true) never get published.
  config.addCollection("posts", (api) =>
    api.getFilteredByGlob("src/blog/posts/*.md")
      .filter((p) => !p.data.draft)
      .sort((a, b) => b.date - a.date));

  config.addFilter("niceDate", (d) =>
    new Date(d).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }));
  config.addFilter("isoDate", (d) => new Date(d).toISOString());
  config.addFilter("isoDay", (d) => new Date(d).toISOString().slice(0, 10));
  config.addFilter("rfcDate", (d) => new Date(d).toUTCString());
  config.addFilter("head", (arr, n) => arr.slice(0, n));

  return {
    dir: { input: "src", output: "_site", includes: "_includes", data: "_data" },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
