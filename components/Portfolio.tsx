"use client";

import { motion, AnimatePresence, LayoutGroup } from "motion/react";
import { useState } from "react";
import HtmlIcon from "@/assets/icons/html-icon.webp";
import CssIcon from "@/assets/icons/css-icon.webp";
import JsIcon from "@/assets/icons/js-icon.webp";
import TsIcon from "@/assets/icons/ts-icon.svg";
import ReactIcon from "@/assets/icons/react-icon.webp";
import TailwindIcon from "@/assets/icons/tailwind-icon.webp";
import NextIcon from "@/assets/icons/next-icon.svg";
import NodejsIcon from "@/assets/icons/node-js-icon.svg";
import ExpressIcon from "@/assets/icons/express-icon.svg";
import MongoIcon from "@/assets/icons/mongo-icon.svg";
import Manage from "@/assets/images/portfolio-screenshots/manage-screenshot.webp";
import ManageSmall from "@/assets/images/portfolio-screenshots/manage-screenshot-small.webp";
import EasyBank from "@/assets/images/portfolio-screenshots/easybank-screenshot.webp";
import EasyBankSmall from "@/assets/images/portfolio-screenshots/easybank-screenshot-small.webp";
import Bookmark from "@/assets/images/portfolio-screenshots/bookmark-screenshot.webp";
import BookmarkSmall from "@/assets/images/portfolio-screenshots/bookmark-screenshot-small.webp";
import Jacked from "@/assets/images/portfolio-screenshots/jacked-screenshot.webp";
import JackedSmall from "@/assets/images/portfolio-screenshots/jacked-screenshot-small.webp";
import JobSphere from "@/assets/images/portfolio-screenshots/job-sphere-screenshot.webp";
import JobSphereSmall from "@/assets/images/portfolio-screenshots/job-sphere-screenshot-small.webp";
import ProjectCard from "./ProjectCard";
import DreamNest from "@/assets/images/portfolio-screenshots/dreamnest-screenshot.webp";
import DreamNestSmall from "@/assets/images/portfolio-screenshots/dreamnest-screenshot-small.webp";
import Showpify from "@/assets/images/portfolio-screenshots/showpify-screenshot.webp";
import ShowpifySmall from "@/assets/images/portfolio-screenshots/showpify-screenshot-small.webp";
import SkillPilot from "@/assets/images/portfolio-screenshots/skillpilot-screenshot.webp";
import SkillPilotSmall from "@/assets/images/portfolio-screenshots/skillpilot-screenshot-small.webp";
import Vidsum from "@/assets/images/portfolio-screenshots/vidsum-screenshot.webp";
import VidsumSmall from "@/assets/images/portfolio-screenshots/vidsum-screenshot-small.webp";
import ColorStore from "@/assets/images/portfolio-screenshots/color-store-screenshot.webp";
import ColorStoreSmall from "@/assets/images/portfolio-screenshots/color-store-screenshot.webp";
import SisayAcademy from "@/assets/images/portfolio-screenshots/sisayacademy-screenshot.webp";
import SisayAcademySmall from "@/assets/images/portfolio-screenshots/sisayacademy-screenshot-small.webp";
import { StaticImageData } from "next/image";

export interface Project {
  title: string;
  badge?: string;
  description: string;
  imageLarge: StaticImageData | string;
  imageSmall: StaticImageData | string;
  technologies: (StaticImageData | string)[];
  liveLink: string;
}

const LANDING_PAGES: Project[] = [
  {
    title: "Manage",
    description:
      "Visually appealing, responsive landing page with clean design and a beautiful testimonial section.",
    imageLarge: Manage,
    imageSmall: ManageSmall,
    technologies: [HtmlIcon, CssIcon, JsIcon],
    liveLink: "#",
  },
  {
    title: "Bookmark",
    description:
      "Modern, visually appealing and Feature-rich landing page with interactive tabs and responsive navigation.",
    imageLarge: Bookmark,
    imageSmall: BookmarkSmall,
    technologies: [HtmlIcon, CssIcon, JsIcon],
    liveLink: "#",
  },
  {
    title: "EasyBank",
    description:
      "Modern banking landing page with Visually appealing backgrounds and clean UI components.",
    imageLarge: EasyBank,
    imageSmall: EasyBankSmall,
    technologies: [HtmlIcon, CssIcon, JsIcon],
    liveLink: "#",
  },
];

const CONTENT_PLATFORMS: Project[] = [
  {
    title: "JobSphere",
    description:
      "Interactive Job Board platform that allows users to search for jobs, filter by location, category, experience level and apply for jobs.",
    imageLarge: JobSphere,
    imageSmall: JobSphereSmall,
    technologies: [ReactIcon, TsIcon, CssIcon],
    liveLink: "#",
  },
  {
    title: "JACKED NEWS",
    description:
      "A dynamic fitness news/blog platform built with animated transitions, featuring curated workout articles, athlete spotlights, and supplement reviews. The responsive application organizes content into discoverable categories with smooth page transitions and engaging hover effects. Key sections include featured athlete profiles, category based fitness articles, supplement spotlights with performance statistics, and a clean layout optimized for fitness enthusiasts seeking the latest training and nutrition insights.",
    imageLarge: Jacked,
    imageSmall: JackedSmall,
    technologies: [ReactIcon, TsIcon, CssIcon],
    liveLink: "#",
  },
];

const AI_TOOLS: Project[] = [
  {
    title: "SkillPilot",
    description:
      "An AI-powered learning platform designed to help users master any skill or topic through personalized learning roadmaps. Simply search for a skill you're interested in, and the platform generates a custom roadmap complete with modules, submodules, and detailed topics—each paired with curated learning resources such as articles, videos, and relevant websites. Users can easily track their progress, pick up right where they left off, and receive AI generated quizzes for each completed module and get quiz result. Users also get a custom AI tutor chatbot for any question about a specific topic and a chat history to revisit all chat sessions.",
    imageLarge: SkillPilot,
    imageSmall: SkillPilotSmall,
    technologies: [
      ReactIcon,
      TsIcon,
      TailwindIcon,
      NodejsIcon,
      ExpressIcon,
      MongoIcon,
    ],
    liveLink: "#",
  },
  {
    title: "VidSummary",
    description:
      "A platform where users can summarize youtube videos and get the full transcripts for the video by simply entering the video link(URL).",
    imageLarge: Vidsum,
    imageSmall: VidsumSmall,
    technologies: [
      ReactIcon,
      TsIcon,
      TailwindIcon,
      NodejsIcon,
      ExpressIcon,
      MongoIcon,
    ],
    liveLink: "#",
  },
];

const ECOMMERCE: Project[] = [
  {
    title: "Sisay Academy",
    description:
      "A comprehensive Learning Management System (LMS) that enables users to create accounts, enroll in or purchase online courses, and manage their learning journey. Tutors can register to offer their teaching services and find job opportunities, while parents and students can connect with and hire tutors. Administrators have full control over the platform, including user management, course management, and website content through an integrated Content Management System (CMS).",
    imageLarge: SisayAcademy,
    imageSmall: SisayAcademySmall,
    technologies: [
      ReactIcon,
      TsIcon,
      CssIcon,
      NodejsIcon,
      ExpressIcon,
      MongoIcon,
    ],
    liveLink: "#",
  },
  {
    title: "DreamNest",
    description:
      "A comprehensive real estate platform where users can Browse property listings for sale or rent with high-quality images and detailed descriptions, Use advanced filters (price range, property type, bedrooms/bathrooms, square footage, location), Save favorite properties to personalized wishlists, Schedule in-person tours with calendar integration, View interactive maps, Receive real-time notifications when their booked tours are confirmed. Property owners can Create and manage listings with multiple photos. Get instant notifications when users book tours of their properties.",
    imageLarge: DreamNest,
    imageSmall: DreamNestSmall,
    technologies: [
      ReactIcon,
      TsIcon,
      CssIcon,
      NodejsIcon,
      ExpressIcon,
      MongoIcon,
    ],
    liveLink: "#",
  },
  {
    title: "Showpify",
    description:
      "A sleek, responsive, modern e-commerce product catalog website. It features dynamic routing, product filtering, theme toggling, and a fully functional shopping cart. With optimized SEO, lightning-fast loading states, Showpify offers a seamless and enjoyable user experience.",
    imageLarge: Showpify,
    imageSmall: ShowpifySmall,
    technologies: [NextIcon, TsIcon, TailwindIcon],
    liveLink: "#",
  },
];

const EXTENSIONS: Project[] = [
  {
    title: "Color Store",
    badge: "200+ Installs",
    description:
      "A VS Code extenstion that helps developers save, organize, and reuse custom colors across projects. It supports multiple formats like HEX, RGB, HSL and gives options to use them as Tailwind CSS and/or as plain CSS styles, all within a sleek, responsive sidebar.",
    imageLarge: ColorStore,
    imageSmall: ColorStoreSmall,
    technologies: [HtmlIcon, CssIcon, TsIcon],
    liveLink: "#",
  },
];
const TABS = [
  "Marketing Sites",
  "E-Commerce",
  "Content Platforms",
  "AI Tools",
  "Side Projects",
];

const DATA: Record<string, Project[]> = {
  "Marketing Sites": LANDING_PAGES,
  "E-Commerce": ECOMMERCE,
  "Content Platforms": CONTENT_PLATFORMS,
  "AI Tools": AI_TOOLS,
  "Side Projects": EXTENSIONS,
};
const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("Marketing Sites");
  const layoutTransition = {
    type: "spring",
    stiffness: 50,
    damping: 15,
  } as const;

  return (
    <section
      id="portfolio"
      className="relative  bg-[#131132] pt-35 pb-50 flex items-center justify-center flex-col min-h-screen max-h-250"
    >
      {/* <div className="umbrella-wrapper">
        <div className="umbrella-top" />
      </div> */}
      <h1 className="text-5xl text-center text-[#e8dfd1] bebas-neue-regular mb-5">
        Some of my Works
      </h1>

      <div className="flex justify-center gap-8 mb-10">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="relative rounded-full px-3 py-1.5 text-lg font-medium text-white transition"
          >
            {activeTab === tab && (
              <motion.span
                layoutId="bubble"
                className="absolute inset-0 bg-[#e59832] rounded-full"
                transition={{ type: "spring", bounce: 0.3 }}
              />
            )}
            <span className="relative z-10 text-white">{tab}</span>
          </button>
        ))}
      </div>
      <LayoutGroup>
        <AnimatePresence mode="wait">
          <motion.div
            layout
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              duration: 0.65,
              layout: layoutTransition,
            }}
            className={`${
              activeTab === "Content Platforms" || activeTab === "AI Tools"
                ? "max-w-[1000px]"
                : "max-w-[1600px]"
            } px-10 mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4 justify-center h-full items-start mb-5`}
          >
            {DATA[activeTab].map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </LayoutGroup>
    </section>
  );
};

export default Portfolio;
