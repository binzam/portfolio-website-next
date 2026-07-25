import Link from "next/link";
import { getAllPosts } from "@/data/blogPosts";
import BlogCard from "./BlogCard";

const BlogTeaser = () => {
  const latestPosts = getAllPosts().slice(0, 2);

  if (latestPosts.length === 0) return null;

  return (
    <section
      id="blog"
      className="relative bg-[#131132] px-4 sm:px-6 md:px-10 py-16 sm:py-24 flex flex-col items-center"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl text-center text-[#e8dfd1] bebas-neue-regular mb-3 px-4">
        From the Blog
      </h2>
      <p className="text-sm sm:text-base text-[#e8dfd1]/70 text-center max-w-xl mb-10 sm:mb-12 font-medium px-4">
        Notes on the problems I actually ran into, written up whenever I have
        something worth sharing.
      </p>

      <div className="w-full max-w-[1000px] grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 mb-10">
        {latestPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      <Link
        href="/blogs"
        className="bg-transparent border-2 border-[#e59832] px-6 py-2.5 rounded-xs text-[#e59832] text-sm sm:text-base font-extrabold hover:bg-[#e59832] hover:text-white transition cursor-pointer flex items-center gap-2"
      >
        VIEW ALL POSTS
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
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </Link>
    </section>
  );
};

export default BlogTeaser;
