"use client";

import { useMemo, useState } from "react";
import type { Project } from "./Portfolio";
import Image from "next/image";

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const previewText = useMemo(() => {
    if (project.description.length <= 105) return project.description;
    const trimmed = project.description.substring(0, 105);
    return trimmed.substring(0, trimmed.lastIndexOf(" ")) + "...";
  }, [project.description]);

  return (
    <article className="max-w-150 flex flex-col gap-1 mx-auto w-full text-white h-fit">
      <div className="screenshots gap-1.5">
        <div className="screenshot-large">
          <Image
            src={project.imageLarge}
            className="screenshot-img"
            alt={project.title}
          />
        </div>
        <div className="screenshot-small">
          <Image
            src={project.imageSmall}
            className="screenshot-img"
            alt={project.title}
          />
        </div>
      </div>

      <div className="bg-[#e8dfd1] border-t-2 border-t-[#ffffff] text-[#131132] p-3.5 sm:p-4 rounded-sm flex flex-col w-full overflow-hidden">
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <h3 className="text-lg sm:text-xl font-bold leading-tight">
              {project.title}
            </h3>
            {project.badge && (
              <span className="text-xs sm:text-sm font-bold text-white bg-[#e59832] rounded-sm px-2.5 py-0.5 whitespace-nowrap">
                {project.badge}
              </span>
            )}
          </div>

          <p className="py-2 pl-3 border-l-2 border-l-[#e59832] bg-white rounded-sm text-xs sm:text-sm leading-relaxed">
            {isExpanded ? project.description : previewText}
          </p>

          {project.description.length > 105 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs sm:text-sm font-semibold text-[#e59832] hover:underline w-fit block pt-0.5"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        <div className="flex justify-between items-center flex-wrap gap-3 mt-5 mb-1">
          <div className="flex gap-1.5 flex-wrap items-center">
            {project.technologies.map((tech, index) => (
              <Image
                key={index}
                src={tech}
                className="size-5 sm:size-6"
                alt="technology icon"
              />
            ))}
          </div>

          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#e59832] px-3.5 py-1.5 rounded-xs text-white text-xs sm:text-sm font-extrabold shadow-md hover:bg-[#d48624] transition cursor-pointer flex items-center gap-1.5 ml-auto sm:ml-0"
            >
              WATCH LIVE
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
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                ></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
