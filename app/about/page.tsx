'use client';
import type { Metadata } from "next";
import Image from "next/image";
import { createContext } from 'react';
import AnimatedText from "@/components/animation/animated-text";
import MainLayout from "@/components/main-layout";
import profilePic from "@/public/profile-pic-2.jpg";
import AnimatedNumbers from "@/components/animation/animated-numbers";
import Experience from "@/components/experience";
import Education from "@/components/education";
import TransitionEffect from "@/components/animation/transition";
import { SkillDataProvider } from "@/components/sub/SkillDataProviders";
import Skills from "@/components/main/skills";

const AboutPage = () => {
  return (
    <>
<TransitionEffect />
<main className="flex flex-col w-full items-center justify-center min-h-screen dark:text-light lg:pt-12">
  <MainLayout className="pt-16">
    <div className="grid w-full grid-cols-8 gap-8 md:gap-16">
      <div className="col-span-8 sm:col-span-4 lg:col-span-3 flex flex-col items-start justify-center order-2 sm:order-none">
        <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
          Sobre mi
        </h2>
        <p className="font-medium">
          - Hola soy Dani Software Developer adept at creating scalable
          systems, seamlessly integrating frontend interfaces with backend
          services, APIs, and databases.
        </p>
        <p className="font-medium my-4">
          - I&apos;m deeply committed to accessibility and inclusivity and
          believe that technology has the power to connect and empower people.
        </p>
        <p className="font-medium">
          - Whether I&apos;m working on a website, mobile app, or other digital
          product, I bring my commitment to design excellence and user-centered
          thinking to every project I work on. I look forward to the opportunity
          to bring my skills and passion to your next project.
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
    <Skills />
          <Experience />
          <Education />
        </MainLayout>
      </main>
  
  <div className="scroll-icon-container fixed bottom-0 mb-4 flex justify-center w-full">
    <div className="scroll-icon animate-bounce">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="w-6 h-6 text-dark dark:text-light"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  </div>

         
     
    </>
  );
};

export default AboutPage;
