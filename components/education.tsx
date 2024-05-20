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
        <span className="capitalize font-medium text-sm md:text-base text-[#0bbf65]">
          {place}
        </span>
        <p className="font-medium w-full">{info}</p>
        <span className="capitalize font-medium text-sm md:text-base text-[#0bbf65]">
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
    <div className="my-16 md:my-32 lg:my-64">
      <h2 className="font-bold mb-16 text-4xl sm:text-6xl lg:text-8xl lg:mb-32 w-full text-center">Educación formal y cursos</h2>

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
            info="Durante los años de estudio, he utilizado los lenguajes C#, Python, HTML, CSS, jQuery y Java. Actualmente estoy en mi tercer y último año."
          />

          <Details
            type="Masters of Computer Science"
            time=""
            place="Udemy"
            info="Currently pursuing a master's project in deep learning, developing a neural network architecture to enhance natural language understanding."
          />

          <Details
            type="Docker, Kubernetes, Jenkins, AWS y Git"
            time=""
            place="Udemy"
            info=""
          />

          <Details
            type="Web & Mobile Designer: UI/UX, Figma."
            time=""
            place="Udemy"
            info=""
          />

          <Details
            type="IT essentials"
            time=""
            place="Cisco"
            info="Currently pursuing a master's project in deep learning, developing a neural network architecture to enhance natural language understanding."
          />

          <Details
            type="Traductor público de inglés"
            time="2017-2018"
            place="Universidad Nacional de Córdoba"
            info=""
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;