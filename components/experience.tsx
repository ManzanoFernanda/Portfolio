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
    <div className="my-7 md:my-15 lg:my-4">
      <h2 className="mb-5 text-4xl sm:text-6xl lg:text-6xl lg:mb-20 w-full text-center dark:text-yellow text-yellow">
        Experience
      </h2>

      <div className="w-full md:w-[50%] lg:w-[95%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          ref={ref}
          className="absolute w-[2px] left-[20px] md:left-[30px] lg:left-9 top-0 lg:-w-[4px] h-full bg-yellow dark:bg-light origin-top"
        />

        <ul className="w-full my-5 flex flex-col items-center justify-between ml-2 sm:ml-4">
          <Details
            position="Front-end Developer - UI/UX"
            company="No Country"
            time="july 2024 - Present"
            work="Community of programmers with passion for programming beyond remuneration. Currently collaborating with a team remotely on the design and frontend development of a web platform for event management. The platform includes a calendar system, email and mobile notifications, and a database for uploading photos. It is constantly evolving and being maintained by the team. My responsibilities included designing and developing user interfaces using React.js, Tailwind CSS and JavaScript, implementing reusable components, optimizing application performance and integrating RESTful APIs. In addition, we participated in code reviews where constructive feedback is applied. The project was deployed using Vercel, ensuring mobile adaptation through responsive web and smooth user experiences. "
            />

          <Details
            position="Front-end Developer - UI/UX - Tester"
            company="Nolock"
            time="june 2022 - january 2024" 
            work="Nolock is a company of freelance programmers where I had the opportunity to be part of various projects and learn new technologies. Working remotely, I participated in both individual and group projects. I created wireframes and applications using atomic design principles with Figma, prioritizing user experience, performance, and accessibility. I worked as a tester using Cypress.io for automated testing, ensuring high-quality standards. Additionally, I participated in code reviews, provided constructive feedback, and applied design patterns in frontend programming."
            />
          
          <Details
            position="Full-Stack Developer"
            company="FabricArg"
            time="february 2022 - jane 2022" 
            work="Internship focused on learning and applying C# and SQL Server technologies. Developed backend and frontend functionalities. Demonstrated strong problem-solving and analytical skills. Architected the implementation of frontend solutions and drove the adoption of best practices in coding standards and performance optimization."
            />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
