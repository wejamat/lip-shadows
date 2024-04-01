const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({"shadows/assets/": "assets/"});

  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));

  eleventyConfig.addFilter("renderRichTextAsHtml", (value) =>
    documentToHtmlString(value)
  );

  //shortcodes
  eleventyConfig.addShortcode('icon', (arg) => `<i class="${arg}"></i>`);
  eleventyConfig.addShortcode('logo', (arg) => `<img src="/assets/img/site/logo-${arg}.png" />`);
  eleventyConfig.addShortcode('podcast', (arg) => `<a href="${arg}" class="spotify-clr">Listen to the Podcast <i class="fa-brands fa-spotify"></i></a>`);
  eleventyConfig.addShortcode('discord', () =>`<a href="https://discord.gg/3PyybHZA" class="discord-clr">Join our Discord <i class="fa-brands fa-discord"></i> </a>`);
  eleventyConfig.addShortcode('meetup', () => `<a href="/" class="meetup-clr">Join our meetup group <i class="fa-brands fa-meetup"></i></a>` );
  eleventyConfig.addShortcode('continue', (arg) => `<a href="${arg}">continue <i class="fa-duotone fa-arrow-right"></i></a>`)

  /**************** Markdown Plugins********************/
  let markdownIt = require("markdown-it");
  var markdownItAttrs = require('markdown-it-attrs');
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);
  const markdownItRenderer = new markdownIt();

  eleventyConfig.addFilter('markdownify', (str) => {
    return markdownItRenderer.renderInline(str);
  });

  // base folder structure
  return {
    passthroughFileCopy: true,
    dir: {
      input: "shadows",
      includes: "_includes",
      data: "_data",
      output: "_site"
    }
  };
}