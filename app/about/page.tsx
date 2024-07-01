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
import foto2 from "@/public/foto2.jpg";

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
      <main className="flex flex-col w-full items-center justify-center min-h-screen dark:text-light lg:pt-10 mt-20">
        <MainLayout className="pt-10">
          <div className="grid w-full-width-container grid-cols-6 gap-60 mt- md:gap-50 flex flex-col">
            <div className="col-span-8 sm:col-span-4 lg:col-span-3 flex flex-col justify-center order-2 sm:order-none">
              <h2 className="mb-6 text-3xl font-bold uppercase text-yellow animate-slide-down">
                Sobre mi
              </h2>
              <p className="font-medium flex flex-col">
              Hola, soy Daniela Manzano, estudio Desarrollo de Software y actualmente vivo en Córdoba, Argentina.
              </p>
              <p className="font-medium my-3 flex flex-col">
              Estoy profundamente comprometida con la accesibilidad y la inclusión, y creo que la tecnología tiene el poder de conectar y empoderar a las personas.
              </p>
              <p className="font-medium my-3 flex flex-col">
              Ya sea que esté trabajando en un sitio web, una aplicación móvil u otro producto digital, aporto mi compromiso con la excelencia en el diseño y el enfoque centrado en el usuario a cada proyecto en el que trabajo.
              </p>
              <p className="font-medium my-3 flex flex-col">
              Disfruto por igual diseñar, generar código y hacer testing, asegurándome de que cada parte del proyecto sea de la más alta calidad.
              </p>
              <p className="font-medium my-3 flex flex-col">
              Estoy en búsqueda de una empresa en la que pueda ser parte de su comunidad por mucho tiempo, formar lazos, crear experiencias y aprender mucho.
              </p>
              <p className="font-medium my-3 flex flex-col">
              Espero tener la oportunidad de aportar mis habilidades y pasión a su próximo proyecto.
              </p>
            </div>

            <div className="justify-center col-span-8 sm:col-span-4 lg:col-span-3 relative h-max rounded-2xl dark:bg-dark order-1 sm:order-none">
              <div className="absolute top-0 -right-3 -z-10 w-[90%] h-[90%] rounded-[2rem]" />
                <Image
                src={foto2}
                alt="Daniela Manzano"
                className="rounded-2xl border-2 border-solid p-5 border-yellow dark:border-yellow"
                width={450}
                height={580}
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
