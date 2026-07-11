"use client";

import { useRef, useEffect } from "react";
const servicesData = [
  {
    id: "01",
    title: "Frontend Engineering & UI/UX",
    description:
      "Transforming designs into pixel-perfect, highly interactive user interfaces. I build responsive layouts with smooth animations, ensuring accessibility and cross-browser compatibility.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    id: "02",
    title: "Complex Web Applications",
    description:
      "Architecting scalable single-page applications and complex admin dashboards. I handle robust state management, multi-step forms, real-time synchronization, and secure API integrations.",
    tags: ["TypeScript", "Zod", "TanStack Query", "WebSockets"],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
        />
      </svg>
    ),
  },
  {
    id: "03",
    title: "Bug Fixing & Refactoring",
    description:
      "Diving into existing codebases to resolve tricky layout issues, squash logical bugs, and optimize performance. I restructure messy code into clean, type-safe, and maintainable systems.",
    tags: ["Debugging", "Code Review", "Code Optimization"],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    id: "04",
    title: "Software Localization",
    description:
      "Preparing your web applications for a global audience. I implement robust internationalization setups, managing translation dictionaries and ensuring layouts adapt to different languages.",
    tags: ["i18n", "English", "Amharic", "RTL/LTR", "Arabic"],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    ),
  },
  {
    id: "05",
    title: "Backend & API Integration",
    description:
      "Bridging the gap between the client and server. I build, secure, and integrate RESTful APIs and GraphQL endpoints, ensuring smooth data flow and optimized database interactions.",
    tags: ["Node.js", "Express", "REST API", "PostgreSQL", "Prisma"],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
  },
  {
    id: "06",
    title: "Performance & SEO Optimization",
    description:
      "Auditing and supercharging web applications for maximum speed and search engine visibility. I focus on Core Web Vitals, lazy loading, and semantic markup to boost your ranking.",
    tags: ["SEO", "Web Vitals", "Lighthouse", "Accessibility"],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
];
const Services = () => {
  return (
    <section
      id="services"
      className="bg-[#e8dfd1] px-2 sm:px-12 py-16 md:py-28 w-full"
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-12 md:mb-20 flex flex-col items-center">
          <h2 className="space-grotesk-font text-[40px] md:text-[60px] font-bold leading-tight text-[#131132] mb-4">
            My <span className="text-[#e59832]">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-[#131132]/80 max-w-2xl text-center font-medium">
            From quick visual tweaks to architecting full-scale applications, I
            bring technical precision and creative problem-solving to every
            layer of the web.
          </p>
        </div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] justify-start gap-2.5 sm:grid-cols-[repeat(auto-fit,minmax(375px,1fr))]">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="flex flex-col py-8 px-4 sm:px-8  rounded-xl bg-[#e59832]/10 border border-[#e59832]/20 hover:bg-[#e59832] hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-[#e59832] text-white rounded-lg group-hover:bg-[#131132] transition-colors duration-300">
                  {service.icon}
                </div>
                <span className="bebas-neue-regular text-2xl text-[#131132]/30 group-hover:text-[#131132]/60 transition-colors duration-300">
                  {service.id}
                </span>
              </div>

              <h3 className="space-grotesk-font text-2xl font-bold text-[#131132] mb-3">
                {service.title}
              </h3>

              <p className="text-[#131132]/80 font-medium leading-relaxed mb-8 grow group-hover:text-[#131132] text-balance">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-bold px-3 py-1 bg-[#131132] text-[#e8dfd1] rounded-full group-hover:bg-white group-hover:text-[#131132] transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
