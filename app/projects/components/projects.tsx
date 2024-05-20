"use client";

import { GithubIcon } from "@/components/icons";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react';
import profilePic from '/Users/fernandamanzano/Documents/Dev/Portfolio/portfolio-main/public/profile-pic-2.jpg';
import TransitionEffect from "@/components/transition";
import MainLayout from "@/components/main-layout";

interface ProjectsProps {
  src: StaticImageData;
  type?: string;
  link: string;
  title: string;
  tools: string;
  summary: string;
  github: string;
}

const Projects = ({
  title,
  src,
  tools,
  link,
  summary,
  github,
}: ProjectsProps) => {
  const FramerImage = motion(Image);

  return (
    <article className="w-full flex-col flex items-center justify-center rounded-2xl border border-solid border-dark bg-light md:p-6 relative dark:text-light dark:bg-dark dark:border-light p-4">
      <div className="absolute top-0 -right-2 md:-right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark dark:bg-light " />

      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={src}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority={true}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <Link href={link} className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-2xl md:text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <p className="my-2 font-medium text-dark dark:text-light">Stack / Tools: {tools}</p>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>

          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold border hover:border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:dark:border-light dark:hover:bg-dark dark:hover:text-light transition-all duration-300"
          >
          </Link>
        </div>
      </div>
    </article>
  );
};

// Remove the default export statement

const AboutPage = () => {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
      setShowScrollIcon(!bottom);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col w-full items-center justify-center min-h-screen dark:text-light lg:pt-12">
        <MainLayout className="pt-16">
          <div className="grid w-full grid-cols-8 gap-8 md:gap-16">
            <div className="col-span-8 sm:col-span-4 lg:col-span-3 flex flex-col items-start justify-center order-2 sm:order-none">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">Info</h2>
              <p className="font-medium">
                - Hola soy Dani Software Developer adept at creating scalable systems, seamlessly integrating frontend interfaces with backend services, APIs, and databases.
              </p>
              <p className="font-medium my-4">
                - I&apos;m deeply committed to accessibility and inclusivity and believe that technology has the power to connect and empower people.
              </p>
              <p className="font-medium">
                - Whether I&apos;m working on a website, mobile app, or other digital product, I bring my commitment to design excellence and user-centered thinking to every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
              </p>
            </div>

            <div className="justify-center col-span-8 sm:col-span-4 lg:col-span-3 relative h-max rounded-2xl border-2 border-solid bg-light p-8 border-dark dark:border-light dark:bg-dark order-1 sm:order-none">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-yellow dark:bg-yellow" />
              <Image
                src={profilePic}
                alt="Daniela Manzano"
                className="w-full h-auto rounded-2xl"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </div>
        </MainLayout>
        {showScrollIcon && (
          <div className="scroll-icon-container fixed bottom-8 mb-4 flex justify-center w-full">
            <div className="scroll-icon animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Projects;

