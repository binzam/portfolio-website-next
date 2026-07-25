"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRouter, usePathname } from "next/navigation";
import OrangeMan from "@/assets/images/orange-man-transparent-small.webp";

const SECTION_LINKS = [
  { id: "hero", label: "Home" },
  { id: "about-me", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact-me", label: "Contact" },
];

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const goToSection = (id: string) => {
    if (pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${id}`);
    }
  };

  const goToBlog = () => {
    router.push("/blogs");
  };

  return (
    <nav className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <ul className="flex items-center gap-3 sm:gap-6 bg-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl relative bebas-neue-regular border border-[#895b1e] shadow-sm">
        <li>
          <motion.button
            type="button"
            onClick={() => goToSection("hero")}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="flex items-center text-base sm:text-xl tracking-wider hover:text-[#e59832] transition-colors cursor-pointer"
            aria-label="Home"
          >
            <div className="relative w-7 h-7 sm:w-6 sm:h-6 sm:mr-1.5 overflow-hidden rounded-full border border-[#895b1e]/30 bg-[#e8dfd1]">
              <Image
                src={OrangeMan}
                alt="Binyam"
                fill
                sizes="28px"
                className="object-cover object-top scale-110 mt-1"
              />
            </div>
            <span className="hidden sm:inline">Home</span>
          </motion.button>
        </li>

        {SECTION_LINKS.slice(1).map((link) => (
          <li key={link.id}>
            <motion.button
              type="button"
              onClick={() => goToSection(link.id)}
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.94 }}
              className="text-base sm:text-xl tracking-wider hover:text-[#e59832] transition-colors cursor-pointer"
            >
              {link.label}
            </motion.button>
          </li>
        ))}

        <li>
          <motion.button
            type="button"
            onClick={goToBlog}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="flex items-center text-base sm:text-xl tracking-wider hover:text-[#e59832] transition-colors cursor-pointer"
            aria-label="Blog"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5 sm:w-[22px] sm:h-[22px] sm:mr-1.5"
            >
              <path d="M2 6h4" />
              <path d="M2 10h4" />
              <path d="M2 14h4" />
              <path d="M2 18h4" />
              <rect width="16" height="20" x="4" y="2" rx="2" />
              <path d="M9.5 8h5" />
              <path d="M9.5 12H16" />
              <path d="M9.5 16H14" />
            </svg>
            <span className="hidden sm:inline">Blog</span>
          </motion.button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
