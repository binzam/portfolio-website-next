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
    <article className="max-w-150 flex flex-col gap-1 mx-auto w-full text-white  h-fit">
      <div className="screenshots">
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

      <div className="bg-[#e8dfd1] border-t-2 border-t-[#ffffff] text-[#131132] p-4 rounded-sm flex flex-col w-full overflow-hidden">
        <div className="space-y-2">
          <div className="flex items-center gap-8">
            <h3 className="text-xl font-bold ">{project.title}</h3>
            {project.badge && (
              <span className="text-sm/4 font-bold text-white bg-[#e59832] rounded-sm px-4 py-1">
                {project.badge}
              </span>
            )}
          </div>

          <p className="py-2 pl-3 border-l-2 border-l-[#e59832] bg-white rounded-sm">
            {isExpanded ? project.description : previewText}
          </p>

          {project.description.length > 105 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-sm font-semibold text-[#e59832] hover:underline w-fit"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
        </div>

        <div className="flex justify-between flex-wrap gap-1 mt-5 mb-1">
          <div className="flex gap-1">
            {project.technologies.map((tech, index) => (
              <Image key={index} src={tech} className="size-6" alt="" />
            ))}
          </div>
          <a
            href={project.liveLink}
            target="_blank"
            className="bg-[#e59832] px-4 py-1 rounded-xs text-white text-sm font-extrabold shadow-xl cursor-pointer flex items-center gap-2"
          >
            WATCH LIVE
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
