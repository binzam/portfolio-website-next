import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Graph } from "schema-dts";
import Nav from "@/components/Nav";
import BlogContent from "@/components/blog/BlogContent";
import { JsonLd } from "@/components/JsonLd";
import { blogPosts, getLastModified, getPostBySlug } from "@/data/blogPosts";
import {
  AUTHOR_NAME,
  OG_IMAGE,
  PERSON_ID,
  postPath,
  SITE_NAME,
  SITE_URL,
  WEBSITE_ID,
} from "@/lib/site";

interface Props {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

const formatDate = (iso: string): string =>
  new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  const path = postPath(post.slug);
  const description = post.seoDescription ?? post.excerpt;

  return {
    title: post.seoTitle ?? post.title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      title: post.title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: "en_US",
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(getLastModified(post)).toISOString(),
      authors: [AUTHOR_NAME],
      tags: post.tags,
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description,
      images: [OG_IMAGE],
    },
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const url = `${SITE_URL}${postPath(post.slug)}`;
  const publishedIso = new Date(post.date).toISOString();
  const modifiedIso = new Date(getLastModified(post)).toISOString();
  const showUpdated =
    post.updatedAt !== undefined && post.updatedAt !== post.date;

  const jsonLd: Graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${url}#article`,
        headline: post.title,
        description: post.seoDescription ?? post.excerpt,
        url,
        mainEntityOfPage: { "@type": "WebPage", "@id": url },
        datePublished: publishedIso,
        dateModified: modifiedIso,
        image: `${SITE_URL}${OG_IMAGE}`,
        keywords: post.tags,
        inLanguage: "en",
        isPartOf: { "@id": WEBSITE_ID },
        author: { "@id": PERSON_ID },
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: { "@id": SITE_URL },
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: { "@id": `${SITE_URL}/blogs` },
          },
          { "@type": "ListItem", position: 3, name: post.title },
        ],
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Nav />
      <main className="bg-[#131132] min-h-svh">
        <article>
          <header className="px-4 sm:px-6 md:px-10 pt-32 sm:pt-40 pb-14 sm:pb-20 flex flex-col items-center text-center">
            <div className="text-6xl sm:text-7xl mb-6" aria-hidden="true">
              {post.emoji}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-bold px-3 py-1 bg-[#e59832] text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="space-grotesk-font text-[28px] sm:text-[48px] md:text-[58px] leading-[1.15] font-extrabold text-[#e8dfd1] max-w-4xl text-pretty mb-5">
              {post.title}
            </h1>
            <p className="bebas-neue-regular text-sm sm:text-base tracking-widest text-[#e8dfd1]/60">
              By{" "}
              <Link
                href="/"
                rel="author"
                className="hover:underline underline-offset-4"
              >
                {AUTHOR_NAME}
              </Link>{" "}
              • <time dateTime={publishedIso}>{formatDate(post.date)}</time>
              {showUpdated && post.updatedAt && (
                <>
                  {" "}
                  • Updated{" "}
                  <time dateTime={modifiedIso}>
                    {formatDate(post.updatedAt)}
                  </time>
                </>
              )}{" "}
              • {post.readTime}
            </p>
          </header>

          <div className="bg-[#e8dfd1] rounded-t-3xl px-4 sm:px-6 md:px-10 py-12 sm:py-16">
            <div className="max-w-3xl mx-auto w-full">
              <BlogContent content={post.content} />

              <div className="mt-14 pt-8 border-t border-[#131132]/15 flex justify-center">
                <Link
                  href="/blogs"
                  className="bg-[#e59832] px-5 py-2.5 rounded-xs text-white text-sm sm:text-base font-extrabold shadow-md hover:bg-[#d48624] transition cursor-pointer flex items-center gap-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-4 shrink-0"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                  BACK TO ALL POSTS
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default BlogPostPage;
