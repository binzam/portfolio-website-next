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
    tags: ["Debugging", "Code Review", "Performance Optimization"],
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
    title: "Deployment & DevOps",
    description:
      "Taking your application from local development to production. I configure local development environments, manage containerized services, and set up smooth deployment pipelines.",
    tags: ["Docker", "Vercel", "CI/CD", "Linux"],
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
    id: "05",
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
    id: "06",
    title: "Web3 & Decentralized Integrations",
    description:
      "Bridging traditional web interfaces with blockchain networks. I build reliable frontends that read and write smart contract data seamlessly for modern decentralized applications.",
    tags: ["Smart Contracts", "Web3 Clients", "dApps"],
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
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
];

const Services = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const cards = sectionEl.querySelectorAll(".service-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="bg-[#e8dfd1] px-6 sm:px-12 py-16 md:py-28 w-full"
    >
      <div className="max-w-3xl mx-auto w-full">
        <div className="mb-12 md:mb-20 flex flex-col items-center md:items-start">
          <h2 className="space-grotesk-font text-[40px] md:text-[60px] font-bold leading-tight text-[#131132] mb-4">
            My <span className="text-[#e59832]">Services</span>
          </h2>
          <p className="text-base sm:text-lg text-[#131132]/80 max-w-2xl text-center md:text-left font-medium">
            From quick visual tweaks to architecting full-scale applications, I
            bring technical precision and creative problem-solving to every
            layer of the web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 md:gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="service-card opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col p-8 rounded-2xl bg-[#e59832]/10 border border-[#e59832]/20 hover:bg-[#e59832] hover:-translate-y-2 group"
              style={{ transitionDelay: `${index * 100}ms` }}
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

              <p className="text-[#131132]/80 font-medium leading-relaxed mb-8 flex-grow group-hover:text-[#131132]">
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
