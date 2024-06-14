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
  SPACE_SKILL,
  DESIGN_TOOL_SKILL,
  AGILE_METHODOLOGY_SKILL,
} from "@/constants";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{transform: "scale(0.9)"}} 
      className=" text-bold text-lg flex flex-col items-center justify-center color:yellow gap-3 h-full relative overflow-hidden py-20 dark:text-yellow text-yellow"
    >
      <SkillText />

      <SkillSection title="Lenguajes de programación" skills={[...LANGUAGES_SKILL]} />
      <SkillSection title="FrontEnd" skills={[...FRONTEND_SKILL]} />
      <SkillSection title="BackEnd" skills={[...BACKEND_SKILL]} />
      <SkillSection title="Bases de Datos" skills={[...DATABASE_SKILL]} />
      <SkillSection title="Desarrollo y Automatización" skills={[...AUTOMATION_SKILL]} />
      <div className="w-full text-center mb-2">
        <SkillSection title=" " skills={[...SPACE_SKILL]} />
      </div>
      
      <SkillSection title="Herramientas de Diseño" skills={[...DESIGN_TOOL_SKILL]} />
      <SkillSection title="Metodologías Ágiles" skills={[...AGILE_METHODOLOGY_SKILL]} />

      
    </section>
  );
};

const SkillSection = ({ title, skills }: { title: string; skills: any[] }) => (
  <div className="w-full text-center mb-2">
    <h2 className="text-3xl text-dark dark:text-light my-8 font-bold">{title}</h2>
    <div className="flex justify-center flex-wrap gap-10 items-center">
      {skills.map((skill: { image: string; skill_name: string; width: number; height: number; }, i: number) => (
        <motion.div
          key={i}
          initial={{ opacity: 30, x: -20 }} 
          animate={{ opacity: 10, x: 1 }} 
          transition={{ duration: 3 , delay: Number(i) * 0.2, repeat: Infinity, repeatType: "reverse" }}
        >
          <SkillDataProvider
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={0}
          />
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
        <h1 className="font-bold mb-7 mt-10 dark:text-yellow text-yellow !text-6xl sm:!text-6xl lg:!text-7xl">
        Skills
        </h1>
      </motion.div>

    </div>
  );
};

export default Skills;
