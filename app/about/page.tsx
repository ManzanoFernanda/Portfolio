'use client';
import type { Metadata } from "next";
import Image from "next/image";
import { createContext, useRef } from 'react';
import AnimatedText from "@/components/animation/animated-text";
import MainLayout from "@/components/main-layout";
import profilePic from "@/public/profile-pic-2.jpg";
import Experience from "@/components/experience";
import Education from "@/components/education";
import TransitionEffect from "@/components/animation/transition";
import { SkillDataProvider } from "@/components/sub/SkillDataProviders";
import Skills from "@/components/main/skills";
import React from "react";

const AboutPage = () => {
  const scrollToPixels = (pixels: number, duration: number) => {
    const start = window.pageYOffset;
    const startTime = performance.now();

    const animateScroll = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const distance = start + pixels * easeInOutQuad(progress);
      window.scrollTo(0, distance);

      if (elapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  const easeInOutQuad = (t: number) => {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  };

  const handleScrollClick = () => {
    const pixelsToScroll = 800; // Número de píxeles a desplazar
    const duration = 1000; // Duración en milisegundos
    scrollToPixels(pixelsToScroll, duration);
  };

  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col w-full items-center justify-center min-h-screen dark:text-light lg:pt-12">
        <MainLayout className="pt-16">
          <div className="grid w-full-width-container grid-cols-10 gap-60 mt- md:gap-50 flex flex-col">
            <div className="col-span-8 sm:col-span-4 lg:col-span-3 flex flex-col justify-center order-2 sm:order-none">
              <h2 className="mb-6 text-3xl font-bold uppercase text-yellow animate-slide-down">
                Sobre mi
              </h2>
              <p className="font-medium flex flex-col">
                - Hola soy Daniela Software Developer adept at creating scalable
                systems, seamlessly integrating frontend interfaces with backend
                services, APIs, and databases.
              </p>
              <p className="font-medium my-4 flex flex-col">
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

            <div className="justify-center col-span-8 sm:col-span-4 lg:col-span-3 relative h-max rounded-2xl border-2 border-solid bg-light p-8 border-yellow dark:border-yellow dark:bg-dark order-1 sm:order-none">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem]" />
              <Image
                src={profilePic}
                alt="Daniela Manzano"
                className="w-full h-auto rounded-2xl"
                priority={true}
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </MainLayout>
      </main>

    </>
  );
};

export default AboutPage;