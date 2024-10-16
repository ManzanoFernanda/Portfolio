import Image from "next/image";
import Link from "next/link";

import MainLayout from "@/components/main-layout";
import AnimatedText from "@/components/animation/animated-text";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/hire-me";
import TransitionEffect from "@/components/animation/transition";
import Socials from "@/components/socials";
import { projectsData } from "@/config/data";
import foto1 from "@/public/foto1.jpg";

export default function Home() {
  const recentProject = projectsData[0];
  const recentProjectTwo = projectsData[2];
  const recentProjectThree = projectsData[1];

  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light lg:pt-10">
        <MainLayout className="pt-28 lg:pt-0 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8 ">
              <Image
                src={foto1}
                alt="Daniela Manzano"
                className="rounded-2xl border-2 border-solid p-5 border-yellow dark:border-yellow"
                width={450}
                height={580}
                priority={true}
              />
            <div className="w-full lg:w-1/2 flex flex-col items-center self-center text-center md:text-start">
              <AnimatedText
                title="Hola soy Dani y espero seamos equipo."
                className="!text-3xl sm:!text-5xl lg:!text-6xl text-center 2xl:!text-6xl lg:!text-left dark:text-yellow text-yellow"
              />
              
              <Socials />
              <div className="flex items-center lg:self-start mt-4 pb-8 gap-4">
                <Link
                  href="/book"
                  className="flex items-center bg-transparent text-dark dark:text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-dark hover:border-dark dark:border-light dark:hover:bg-yellow dark:hover:text-dark hover:bg-yellow"
                >
                  Contacto
                </Link>
                <a
                  href="/ManzanoFernanda.pdf"
                  target="_blank"
                  className="flex items-center bg-transparent text-dark dark:text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-dark hover:border-dark dark:border-light dark:hover:bg-yellow dark:hover:text-dark hover:bg-yellow"
                  download={true}
                >
                  Curriculum
                  <LinkArrow className={"w-6 ml-1"} />
                </a>
              </div>
            </div>
          </div>
        </MainLayout>

        <h1 className="absolute text-xl md:text-2xl font-bold top-8 left-4 right-auto md:hidden z-10">
          Portfolio
        </h1>

        <HireMe />
      </main>
    </>
  );
}