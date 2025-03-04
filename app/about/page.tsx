'use client';
import type { Metadata } from "next";
import Image from "next/image";
import { createContext, useRef } from 'react';
import AnimatedText from "@/components/animation/animated-text";
import MainLayout from "@/components/main-layout";
import Experience from "@/components/experience";
import Education from "@/components/education";
import TransitionEffect from "@/components/animation/transition";
import { SkillDataProvider } from "@/components/sub/SkillDataProviders";
import Skills from "@/components/main/skills";
import React from "react"
import LiIcon from "@/components/li-icon";
import { motion } from "framer-motion";
import foto2 from "@/public/foto2.jpeg";

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
    const pixelsToScroll = 800;
    const duration = 1000; 
    scrollToPixels(pixelsToScroll, duration);
  };

  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col w-full items-center justify-center min-h-screen lg:pt-5 mt-10">
        <MainLayout className="pt-10">
          <div className="grid w-full-width-container grid-cols-8 gap-40 mt- md:gap-20 flex flex-col">
            <div className="col-span-3 sm:col-span-2 lg:col-span-4 flex flex-col justify-center order-2 sm:order-none">
              <h2 className="mb-6 text-2xl uppercase text-yellow animate-slide-down">
                About me
              </h2>
              <p className="font-medium flex flex-col">
              Hello, I&apos;m Daniela Manzano, and I&apos;ve been studying programming since 2020. I&apos;ve always been interested in technology, which has given me knowledge in both hardware and software.
              </p>
              <p className="font-medium my-3 flex flex-col">
              I am deeply committed to accessibility and inclusion, and I believe technology has the power to connect and empower people.</p>
              <p className="font-medium my-3 flex flex-col">
              Whether working on a website, a mobile app, or another digital product, I bring my dedication to design excellence and a user-centered approach to every project I take on.</p>
              <p className="font-medium my-3 flex flex-col">
              I equally enjoy designing and coding. I am looking for a company where I can be part of its community, build relationships, create experiences, and gain knowledge.</p>
            </div>

            <div className="justify-center col-span-4 sm:col-span-2 lg:col-span-3 relative h-max rounded-2xl order-1 sm:order-none">
              <div className="bg-cblue absolute top-0 -right-3 -z-10 w-[90%] h-[90%] rounded-[2rem]" />
                <Image
                src={foto2}
                alt="Daniela Manzano"
                width={600}
                height={500}
                priority={true}
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </MainLayout>
        <div className="scroll-icon-container">
          <motion.div
            className="scroll-icon"
            onClick={handleScrollClick}
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
