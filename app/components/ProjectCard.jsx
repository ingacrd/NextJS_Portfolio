import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  technologies,
  compact = false,
}) => {
  const imageHeightClass = compact ? "h-40 md:h-48" : "h-52 md:h-72";
  const bodyPaddingClass = compact ? "py-4 px-3" : "py-6 px-4";
  const titleClass = compact
    ? "text-lg font-semibold mb-1"
    : "text-xl font-semibold mb-2";
  const descriptionClass = compact
    ? "text-xs md:text-sm text-[#ADB7BE] line-clamp-3"
    : "text-sm text-[#ADB7BE]";

  return (
    <div className={compact ? "text-sm" : ""}>
      <div
        id="card"
        className={`${imageHeightClass} rounded-t-xl relative group`}
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div
          id="tech"
          className="flex flex-wrap justify-start absolute bottom-3 left-3 items-center max-w-full"
        >
          {technologies.map((technology, index) => (
            <div
              key={index}
              className="text-white ml-1 border-primary-500 bg-[#181818] rounded-full border-2 text-[10px] md:text-xs items-center justify-center py-1 px-3 mb-1"
            >
              {technology}
            </div>
          ))}
        </div>

        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            className="h-10 w-10 md:h-14 md:w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-6 w-6 md:h-10 md:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          {previewUrl === "/" ? null : (
            <Link
              href={previewUrl}
              className="h-10 w-10 md:h-14 md:w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-6 w-6 md:h-10 md:w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
      <div
        className={`text-white mt-3 rounded-b-xl bg-[#181818] ${bodyPaddingClass}`}
      >
        <h5 className={titleClass}>{title}</h5>
        <p className={descriptionClass}>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
