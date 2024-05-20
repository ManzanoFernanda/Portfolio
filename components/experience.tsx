"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/li-icon";

interface DetailsProps {
  position: string;
  company: string;
  time: string;
  work: string;
}

const Details = ({ position, company, time, work }: DetailsProps) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        viewport={{ once: true }}
      >
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">
          {position}&nbsp;{" "}
          <p className="text-yellow capitalize inline-block">@{company}</p>
        </h3>
        <span className="capitalize font-medium text-sm md:text-base text-dark dark:text-light">
          {time} |
        </span>
        <p className="font-medium w-full text-sm md:text-base">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-16 md:my-32 lg:my-64">
      <h2 className="font-bold mb-16 text-4xl sm:text-6xl lg:text-8xl lg:mb-32 w-full text-center">
        Experiencia
      </h2>

      <div className="w-full md:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute w-[2px] left-[20px] md:left-[30px] lg:left-9 top-0 lg:-w-[4px] h-full bg-yellow dark:bg-light origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-2 sm:ml-4">
          <Details
            position="Tester"
            company="Nolock / Squadreon"
            time="junio 2022 - Octubre 2022"
            work="Freelancer - Tester, diseño de interfaz de usuario, creación de wireframes, metodología de diseño atómico, resolución de problemas de rendimiento, accesibilidad y experiencia de usuario."
            />

          <Details
            position="Pasante FullStack Developer"
            company="FabricARG"
            time="julio 2022 - noviembre 2022" 
            work={""} 
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
