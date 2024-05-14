"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import { GithubIcon } from "@/components/icons";

interface FeatureProjectsProps {
  src: StaticImageData;
  type?: string;
  link: string;
  title: string;
  summary: string;
  tools: string;
  github: string;
}

const RecentProjects = ({
  title,
  type = "Recent project",
  src,
  tools,
  summary,
}: FeatureProjectsProps) => {
  const FramerImage = motion(Image);

  return (
    <article className="w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl lg:p-12 relative dark:text-light p-4 rounded-br-3xl sm:rounded-2xl md:p-8 flex-col lg:flex-row">
      <div className="absolute top-0 -right-3 -z-10 sm:w-[101%] sm:h-[103%] sm:rounded-[2.5rem] bg-dark dark:bg-light w-full h-[101%] rounded-[1.5rem]" />
        <FramerImage
          src={src}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between pl-0 pt-6 lg:pl-8">
        <span className="text-[#0bbf65] font-medium text-base md:text-xl">
          {type}
        </span>
          <h2 className="my-2 w-full text-left text-2xl md:text-4xl font-bold">
            {title}
          </h2>
        <p className="my-2 font-medium text-sm md:text-base text-dark dark:text-light">
          {summary}
        </p>
        <p className="my-2 font-medium text-sm md:text-base text-dark dark:text-light">
          Stack / Tools: {tools}
        </p>
        <div className="flex justify-between w-full items-center">
          <div className="mt-2 flex items-center">

          </div>
        </div>
      </div>
    </article>
  );
};

export default RecentProjects;
