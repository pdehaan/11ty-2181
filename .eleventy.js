module.exports = (eleventyConfig) => {
  eleventyConfig.addFilter("is_abs_url", function (url) {
    return /^https?:\/\//.test(url);
  });

  return {
    dir: {
      input: "src",
      output: "www",
    },
  };
};
