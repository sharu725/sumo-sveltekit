import { defineMDSveXConfig as defineConfig } from "mdsvex";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
  layout: {
    default: "src/layouts/default.svelte",
    page: "src/layouts/page.svelte",
    post: "src/layouts/post.svelte",
  },
});

export default config;
