import { Fragment } from "react";
import type { BlogContentBlock } from "@/data/blogPosts";
import CodeBlock from "./CodeBlock";

function renderInline(text: string) {
  const pattern = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  const parts = text.split(pattern).filter((part) => part !== "");

  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-bold text-[#131132]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return (
        <code
          key={i}
          className="font-mono text-[0.85em] bg-[#131132]/10 text-[#131132] px-1.5 py-0.5 rounded"
        >
          {part.slice(1, -1)}
        </code>
      );
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[`*]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getHeadingIds(content: BlogContentBlock[]): Map<number, string> {
  const seen = new Map<string, number>();
  const ids = new Map<number, string>();

  content.forEach((block, index) => {
    if (block.type !== "heading") return;
    const base = slugify(block.text) || "section";
    const count = seen.get(base) ?? 0;
    seen.set(base, count + 1);
    ids.set(index, count === 0 ? base : `${base}-${count + 1}`);
  });

  return ids;
}

const BlogContent = ({ content }: { content: BlogContentBlock[] }) => {
  const headingIds = getHeadingIds(content);

  return (
    <div className="flex flex-col gap-5">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading": {
            const Tag = block.level === 3 ? "h3" : "h2";
            return (
              <Tag
                key={index}
                id={headingIds.get(index)}
                className={
                  block.level === 3
                    ? "scroll-mt-28 space-grotesk-font text-xl sm:text-2xl font-bold text-[#131132] mt-4"
                    : "scroll-mt-28 space-grotesk-font text-2xl sm:text-3xl font-bold text-[#131132] mt-6"
                }
              >
                {block.text}
              </Tag>
            );
          }

          case "paragraph":
            return (
              <p
                key={index}
                className="text-base sm:text-lg leading-relaxed text-[#131132]/90 text-balance"
              >
                {renderInline(block.text)}
              </p>
            );

          case "code":
            return (
              <CodeBlock
                key={index}
                code={block.code}
                language={block.language}
                filename={block.filename}
              />
            );

          case "list":
            return block.ordered ? (
              <ol
                key={index}
                className="list-decimal pl-5 sm:pl-6 flex flex-col gap-2"
              >
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-base sm:text-lg leading-relaxed text-[#131132]/90 pl-1"
                  >
                    {renderInline(item)}
                  </li>
                ))}
              </ol>
            ) : (
              <ul
                key={index}
                className="list-disc pl-5 sm:pl-6 flex flex-col gap-2"
              >
                {block.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-base sm:text-lg leading-relaxed text-[#131132]/90 pl-1"
                  >
                    {renderInline(item)}
                  </li>
                ))}
              </ul>
            );

          case "callout": {
            const label =
              block.variant === "warning"
                ? "Heads up"
                : block.variant === "tip"
                  ? "Tip"
                  : "Note";
            return (
              <div
                key={index}
                role="note"
                className="rounded-md border-l-4 border-l-[#e59832] bg-[#e59832]/10 px-4 py-3 sm:px-5 sm:py-4"
              >
                <span className="bebas-neue-regular text-sm tracking-widest text-[#e59832] block mb-1">
                  {label}
                </span>
                <p className="text-base leading-relaxed text-[#131132]/90 text-balance">
                  {renderInline(block.text)}
                </p>
              </div>
            );
          }

          case "quote":
            return (
              <blockquote
                key={index}
                className="border-l-4 border-l-[#131132] pl-4 sm:pl-6 py-1 italic text-lg sm:text-xl text-[#131132] space-grotesk-font"
              >
                “{renderInline(block.text)}”
                {block.author && (
                  <footer className="not-italic text-sm font-semibold text-[#131132]/60 mt-2 bebas-neue-regular tracking-widest">
                    — {block.author}
                  </footer>
                )}
              </blockquote>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};

export default BlogContent;
