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
    <div className="my-10 md:my-20 lg:my-40">
      <h2 className="mb-10 text-3xl sm:text-3xl lg:text-6xl lg:mb-32 w-full text-center dark:text-yellow text-yellow">
        Formal education and courses
        </h2>

      <div className="w-full md:w-[50%] lg:w-[95%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute w-[2px] left-[20px] md:left-[30px] lg:left-9 top-0 lg:-w-[4px] h-full bg-yellow dark:bg-light origin-top"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4">
          <Details
            type="Software Development"
            time="2020 - 2024"
            place="Córdoba Higher Technical Institute"
            info="Principles of logic and programming, computer architecture, operating systems, applied mathematics, system modeling, advanced programming, and databases. Learned C#, Python, Haskell, HTML, CSS, jQuery, and Java. Participation in hackathons and seminars."
          />

          <Details
            type="Docker, Kubernetes, Jenkins, AWS, Git"
            time="2024"
            place="Udemy"
            info="Fundamentals of DevOps, using essential tools such as Kubernetes, Docker, Jenkins, AWS, Git&Github, and Ansible, with a focus on cluster implementation, container management, pipeline automation, and cloud management."
          />

           <Details
            type="Programming"
            time="2023"
            place="Polytechnic Institute of Córdoba"
            info="Course with a duration of 364 hours with certificate issued by the Ministry of Education of the Province of Cordoba. The course mainly focused on using machine learning and developing it with Python and JavaScript."
          />

          <Details
            type="React y Redux, React Router, TailwindCSS, Context and Hooks."
            time="2022"
            place="Udemy"
            info="Creation of dynamic web applications using React, TypeScript, Redux, and TailwindCSS, mastering client-side navigation, form handling, state management, API requests, and performance optimization."
          />

          <Details
            type="Web and mobile design with Figma"
            time="2021"
            place="Udemy"
            info="Skills in planning, strategy, and creation of digital and analog products, with a focus on UX Research, usability testing, and user flow design. Prototyping in low, medium, and high fidelity, applying design and navigation patterns."
          />

          <Details
            type="Blazor - .NET Core 3.1 and WebAssembly"
            time="2020"
            place="Udemy"
            info="Development of interactive web applications with C#, using Blazor WebAssembly and Blazor Server, focusing on creating reusable components, handling events, and working with RESTful APIs."
          />

          <Details
            type="IT Essentials"
            time="2017"
            place="Cisco"
            info="Fundamentals of networking and information technology, including installation, configuration, maintenance, and troubleshooting of computers and networks, hardware, software, and security."
          />

          <Details
            type="English Translator"
            time="2017 - 2018"
            place="Córdoba National University"
            info="Focus on advanced language proficiency, including grammar, phonology, and vocabulary expansion. Refining syntax for natural and effective communication. 
            My current English level is B2."
          />

        </ul>
      </div>
    </div>
  );
};

export default Education;
