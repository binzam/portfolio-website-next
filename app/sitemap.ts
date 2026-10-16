import type { MetadataRoute } from "next";
import { getAllPosts, getLastModified } from "@/data/blogPosts";
import { postPath, SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();

  const latestTime = posts.reduce(
    (max, post) => Math.max(max, new Date(getLastModified(post)).getTime()),
    0,
  );
  const latestPostDate = latestTime > 0 ? new Date(latestTime) : undefined;

  return [
    { url: SITE_URL, lastModified: latestPostDate },
    { url: `${SITE_URL}/blogs`, lastModified: latestPostDate },
    ...posts.map((post) => ({
      url: `${SITE_URL}${postPath(post.slug)}`,
      lastModified: new Date(getLastModified(post)),
    })),
  ];
}
