import { getCollection, type CollectionEntry } from "astro:content";
import readingTime from "reading-time";

export type BlogPost = CollectionEntry<"blog">;

export async function getAllPosts() {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getReadingTimeText(post: BlogPost) {
  return readingTime(post.body).text;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(date);
}

export function groupPostsByYear(posts: BlogPost[]) {
  return posts.reduce<Record<string, BlogPost[]>>((groups, post) => {
    const year = String(post.data.date.getFullYear());
    groups[year] ??= [];
    groups[year].push(post);
    return groups;
  }, {});
}
