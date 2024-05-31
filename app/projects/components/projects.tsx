"use client";

import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaGlobe } from 'react-icons/fa';  // Importa el icono de globo terráqueo

interface FeatureProjectsProps {
  src: StaticImageData[];
  type?: string;
  link: string;
  title: string;
  summary: string;
}

const Projects = ({
  title,
  type = "",
  src,
  summary,
  link
}: FeatureProjectsProps) => {
  const FramerImage = motion(Image);

  return (
    <article className="w-full h-[600px] mx-auto my-10 rounded-3xl border border-solid border-yellow bg-grey dark:bg-greyd dark:border-yellow p-4 rounded-br-3xl sm:rounded-2xl md:p-6 text-light dark:text-dark relative">

      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        autoPlay
        interval={3000}
        className="w-full h-[300px]"
      >
        {src.map((image, index) => (
          <div key={index} className="mb-10 w-full h-[350px]">
            <FramerImage
              src={image}
              alt={`${title} image ${index + 1}`}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              priority={true}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
        ))}
      </Carousel>

      <div className="flex text-light dark:text-dark w-full flex flex-col items-start pt-8">
        <span className="flex text-light dark:text-dark font-medium text-base md:text-xl">
          {type}
        </span>
        <h2 className="flex text-light dark:text-dark my-2 mt-10 text-left text-2xl md:text-4xl font-bold">
          {title}
        </h2>
        <p className="flex text-light dark:text-dark my-3 font-medium text-sm md:text-base">
          {summary}
        </p>
      </div>
      
      <div className="w-full flex justify-end mt-3">
        <Link href={link} target="_blank"  passHref>
            <FaGlobe
              className="flex text-2xl text-light dark:text-dark transition-all duration-300 hover:text-yellow dark:hover:text-yellow"
            />
        </Link>
      </div>
      
    </article>
  );
};

export default Projects;
