import rss from "@astrojs/rss";
import { getAllPosts } from "../lib/blog";

export async function GET(context) {
  const posts = await getAllPosts();

  return rss({
    title: "Bias Layer",
    description: "Technical editorials and developer notes published daily.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt,
      link: `/blog/${post.slug}/`
    }))
  });
}
