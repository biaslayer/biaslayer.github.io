import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

export default defineConfig({
  site: "https://biaslayer.github.io",
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false
    })
  ],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          properties: {
            className: ["anchor-link"],
            ariaLabel: "Anchor link"
          },
          content: {
            type: "text",
            value: "#"
          }
        }
      ],
      [
        rehypePrettyCode,
        {
          theme: "github-dark-default",
          keepBackground: false
        }
      ]
    ]
  }
});
