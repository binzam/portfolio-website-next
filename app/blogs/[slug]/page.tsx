import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import BlogContent from "@/components/blog/BlogContent";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  return {
    title: `${post.title} | Binyam's Blog`,
    description: post.excerpt,
  };
}

const BlogPostPage = async ({ params }: Props) => {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <>
      <Nav />
      <article className="bg-[#131132] min-h-svh">
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
            {formattedDate} • {post.readTime}
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
    </>
  );
};

export default BlogPostPage;
