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
      className="my-8 last:mb-0 w-[80%] md:w-[60%] mx-auto flex flex-col items-center justify-between"
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
          {time} 
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
    <div className="my-8 md:my-16 lg:my-5">
      <h2 className="font-bold mb-5 text-4xl sm:text-6xl lg:text-6xl lg:mb-20 w-full text-center dark:text-yellow text-yellow">
        Experiencia
      </h2>

      <div className="w-full md:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute w-[2px] left-[20px] md:left-[30px] lg:left-9 top-0 lg:-w-[4px] h-full bg-yellow dark:bg-light origin-top"
        />

        <ul className="w-full my-5 flex flex-col items-center justify-between ml-2 sm:ml-4">
          <Details
            position="Tester / Diseñadora de interfaz de usuario"
            company="Nolock / Squadreon"
            time="junio 2022 - Octubre 2022"
            work="Como Diseñador de Interfaz de Usuario, realicé la creación de wireframes y aplicaciones, implementando metodologías avanzadas como el diseño atómico. Optimicé el rendimiento y la accesibilidad de los productos, priorizando la experiencia del usuario. Ocupando el puesto de tester me llevó a adentrarme en nuevas tecnologías, una experiencia que encontré apasionante, también me permitió trabajar profesionalmente con las metodologías scrum."
            />

          <Details
            position="Pasante FullStack Developer"
            company="FabricARG"
            time="julio 2022 - noviembre 2022" 
            work="Prácticas para empresa local, enfocado en el aprendizaje y la aplicación de tecnologías como C# y SQL Server. Durante mi pasantía, adquirí habilidades prácticas en el uso de estas herramientas mediante ejercicios y actividades de formación."
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
