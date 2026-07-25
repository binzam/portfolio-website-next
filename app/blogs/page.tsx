import type { Metadata } from "next";
import Nav from "@/components/Nav";
import BlogCard from "@/components/blog/BlogCard";
import { getAllPosts } from "@/data/blogPosts";

export const metadata: Metadata = {
  title: "Blog | Binyam",
  description:
    "Write-ups on the real problems I run into building web apps. Not tutorials, just what actually happened and how I solved it.",
};

const BlogsPage = () => {
  const posts = getAllPosts();

  return (
    <>
      <Nav />
      <main className="bg-[#131132] min-h-svh px-4 sm:px-6 md:px-10 pt-32 sm:pt-36 pb-16 sm:pb-24">
        <div className="max-w-5xl mx-auto w-full flex flex-col items-center">
          <h1 className="space-grotesk-font text-[40px] sm:text-[56px] md:text-[70px] leading-[1.1] font-extrabold text-[#e8dfd1] text-center mb-4">
            The Blog
          </h1>
          <p className="text-base sm:text-lg text-[#e8dfd1] max-w-2xl text-center font-medium mb-12 sm:mb-16 text-pretty">
           Just notes I write up whenever I hit a problem worth sharing the fix for.
          </p>

          {posts.length === 0 ? (
            <p className="text-[#131132]/60 text-center">
              Nothing posted yet. Check back soon.
            </p>
          ) : (
            <div className="w-full grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default BlogsPage;
