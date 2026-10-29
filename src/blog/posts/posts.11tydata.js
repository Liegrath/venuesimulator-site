// Drafts (draft: true) get no page in the published build; `npm start` still renders them for previewing.
export default {
  layout: "post.njk",
  eleventyComputed: {
    permalink: (data) =>
      data.draft && process.env.ELEVENTY_RUN_MODE === "build" ? false : `/blog/${data.page.fileSlug}/`,
  },
};
