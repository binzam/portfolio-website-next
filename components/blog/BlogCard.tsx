import Link from "next/link";
import type { BlogPost } from "@/data/blogPosts";

const BlogCard = ({ post }: { post: BlogPost }) => {
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="card max-w-150 flex flex-col mx-auto w-full h-fit">
      <div className="bg-[#e59832] flex items-center justify-center h-36 sm:h-40 rounded-t-sm text-6xl sm:text-7xl">
        <span aria-hidden="true">{post.emoji}</span>
      </div>

      <div className="bg-[#e8dfd1] border-t-2 border-t-white text-[#131132] p-3.5 sm:p-4 rounded-b-sm flex flex-col w-full overflow-hidden gap-3">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#131132]/60 bebas-neue-regular tracking-widest">
          <span>{formattedDate}</span>
          <span aria-hidden="true">•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-lg sm:text-xl font-bold leading-tight space-grotesk-font">
          {post.title}
        </h3>

        <p className="py-2 pl-3 border-l-2 border-l-[#e59832] bg-white rounded-sm text-xs sm:text-sm leading-relaxed">
          {post.excerpt}
        </p>

        <div className="flex justify-between items-center flex-wrap gap-3 mt-1">
          <div className="flex gap-1.5 flex-wrap items-center">
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-[10px] sm:text-xs font-bold px-2.5 py-1 bg-[#131132] text-[#e8dfd1] rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blogs/${post.slug}`}
            className="bg-[#e59832] px-3.5 py-1.5 rounded-xs text-white text-xs sm:text-sm font-extrabold shadow-md hover:bg-[#d48624] transition cursor-pointer flex items-center gap-1.5 ml-auto sm:ml-0"
          >
            READ POST
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              className="size-3.5 sm:size-4 shrink-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
