import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { SkillDataProvider } from "@/components/sub/SkillDataProviders";
import { Key, createContext } from 'react';

import {
  LANGUAGES_SKILL,
  FRONTEND_SKILL,
  BACKEND_SKILL,
  DATABASE_SKILL,
  AUTOMATION_SKILL,
  DESIGN_TOOL_SKILL,
  AGILE_METHODOLOGY_SKILL,
} from "@/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{transform: "scale(0.9)"}} 
      className="flex flex-col items-center justify-center color:yellow gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      <SkillSection title="Lenguajes" skills={[...LANGUAGES_SKILL]} />
      <SkillSection title="Frontend" skills={[...FRONTEND_SKILL]} />
      <SkillSection title="Backend" skills={[...BACKEND_SKILL]} />
      <SkillSection title="Bases de Datos" skills={[...DATABASE_SKILL]} />
      <SkillSection title="Desarrollo y Automatización" skills={[...AUTOMATION_SKILL]} />
      <SkillSection title="Herramientas de Diseño" skills={[...DESIGN_TOOL_SKILL]} />
      <SkillSection title="Metodologías Ágiles" skills={[...AGILE_METHODOLOGY_SKILL]} />

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};

const SkillSection = ({ title, skills }: { title: string; skills: any[] }) => (
  <div className="w-full text-center mb-16">
    <h2 className="text-2xl dark:text-light text-dark my-4 font-bold">{title}</h2>
    <div className="flex flex-row justify-around flex-wrap gap-5 items-center">
      {skills.map((skill: { image: string; skill_name: string; width: number; height: number; }, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: Number(i) * 0.1 }}
        >
          <SkillDataProvider
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height} index={0}          />
        </motion.div>
      ))}
    </div>
  </div>
);
const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="font-bold mb-16 text-4xl sm:text-6xl lg:text-8xl lg:mb-32 w-full text-center">
          Skills
        </h1>
      </motion.div>

      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[30px] dark:text-white text-dark font-medium mt-[10px] text-center mb-15]"
      >
        Creating apps with modern technologies.
      </motion.div>

      <motion.div
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        className="cursive text-[20px] dark:text-white text-dark mb-10 mt-[10px] text-center"
      >
        Never miss a task, deadline or idea.
      </motion.div>
    </div>
  );
};

export default Skills;
