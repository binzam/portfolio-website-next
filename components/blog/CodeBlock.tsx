"use client";

import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const COPIED_RESET_MS = 1800;

const CodeBlock = ({ code, language, filename }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const label = filename ?? language ?? "text";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), COPIED_RESET_MS);
    } catch {
    }
  };

  return (
    <div className="rounded-lg overflow-hidden border border-[#e59832]/25 shadow-md my-2">
      <div className="flex items-center justify-between bg-[#0d0c26] px-4 py-2 border-b border-white/10">
        <span className="font-mono text-xs text-[#e8dfd1]/60 truncate">
          {label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={
            copied ? "Copied to clipboard" : `Copy ${label} to clipboard`
          }
          className="font-mono text-xs font-semibold text-[#e59832] hover:text-[#f5b660] transition-colors shrink-0 pl-3"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <pre
        tabIndex={0}
        className="bg-[#131132] text-[#e8dfd1] p-4 overflow-x-auto text-[13px] sm:text-sm leading-relaxed"
      >
        <code
          className={language ? `font-mono language-${language}` : "font-mono"}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};

export default CodeBlock;
