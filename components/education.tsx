"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "@/components/li-icon";

interface DetailsProps {
  type: string;
  place: string;
  time: string;
  info: string;
}

const Details = ({ type, place, time, info }: DetailsProps) => {
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
        className="flex flex-col gap-4 md:gap-2"
      >
        <h3 className="capitalize font-bold text-lg sm:text-xl md:text-2xl">{type}&nbsp; </h3>
        <span className="capitalize font-medium text-sm md:text-base text-dark dark:text-light">
          {place}
        </span>
        <p className="font-medium w-full">{info}</p>
        <span className="capitalize font-medium text-sm md:text-base text-dark dark:text-light">
          {time} 
        </span>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-16 md:my-30 lg:my-40">
      <h2 className="font-bold mb-10 text-4xl sm:text-6xl lg:text-6xl lg:mb-32 w-full text-center dark:text-yellow text-yellow">
        Educación formal y cursos
        </h2>

      <div className="w-full md:w-[90%] lg:w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute w-[2px] left-[20px] md:left-[30px] lg:left-9 top-0 lg:-w-[4px] h-full bg-yellow dark:bg-light origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4">
          <Details
            type="Software developer"
            time="2020 - Presente"
            place="Instituto Técnico Superior Cordoba"
            info="Durante los años de estudio, he aprendido academicamente C#, Python, Haskell, HTML, CSS, jQuery y Java. Actualmente estoy en mi tercer y último año."
          />

          <Details
            type="Master React y Redux. React Router, TailwindCSS, Context y Hooks"
            time=""
            place="Udemy"
            info="Fundamentos de React, JSX, state y props. Construcción de componentes reutilizables. Utilización de Redux Toolkik. Gestión de estado global con Context API, y estilización de componentes con TailwindCSS.."
          />

          <Details
            type="Docker, Kubernetes, Jenkins, AWS y Git"
            time=""
            place="Udemy"
            info="Navegación en entornos Docker, despliegue de servicios utilizando Kubernetes y automatización de procesos mediante Jenkins. Gestión de infraestructuras en la nube con AWS, orquestación de configuraciones con Ansible y manejo de versiones de código con Git."
          />

          <Details
            type="Web & Mobile Designer: UI/UX, Figma."
            time=""
            place="Udemy"
            info="Figma para el diseño web y móvil, fundamentos del sketching, proceso de boceto y creación de flujos de usuario. Creación de wireframes, prototipos y sitemaps, utilizando recursos comunitarios y plugins de Figma. Teoría del diseño, accesibilidad y el uso de grids, tipografía, colores e iconografía."
          />

          <Details
            type="IT essentials"
            time=""
            place="Cisco"
            info="Introducción integral al campo de las tecnologías de la información, cubriendo hardware, software, redes y seguridad. Montaje y configuración de PC, instalación y gestión de sistemas operativos y aplicaciones. Resolución de problemas técnicos de hardware y software. Configuración de redes básicas, medidas de seguridad informática, y soporte técnico."
          />

          <Details
            type="Traductor público de inglés"
            time="2017-2018"
            place="Universidad Nacional de Córdoba"
            info="Un año y medio de cursado en la carrera de Traductor Público de Inglés en la Facultad de Lenguas de la UNC. Durante este tiempo, aprendí sobre traducción, interpretación, gramática y fonética del idioma inglés."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
