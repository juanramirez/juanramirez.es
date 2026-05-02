import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const siteUrl = context.site ?? new URL(context.url.origin);

  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  const lastBuildDate = posts[0]?.data.date.toUTCString() ?? new Date().toUTCString();

  return rss({
    title: "Juan Ramírez",
    description: "Articles on acquired brain injury, technology, and personal reflections.",
    site: siteUrl.toString(),
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: post.data.date,
      link: `/blog/${post.slug}/`,
      author: post.data.author,
      categories: post.data.tags,
    })),
    customData: `<language>en-us</language><lastBuildDate>${lastBuildDate}</lastBuildDate>`,
  });
}
