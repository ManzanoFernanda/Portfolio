import Image from "next/image";
import Link from "next/link";

import MainLayout from "@/components/main-layout";
import profilePic from "@/public/profile.webp";
import AnimatedText from "@/components/animation/animated-text";
import { LinkArrow } from "@/components/icons";
import HireMe from "@/components/hire-me";
import TransitionEffect from "@/components/animation/transition";
import Socials from "@/components/socials";
import RecentProjects from "./projects/components/recent-projects";
import { projectsData } from "@/config/data";

export default function Home() {
  const recentProject = projectsData[0];
  const recentProjectTwo = projectsData[2];
  const recentProjectThree = projectsData[1];

  return (
    <>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light lg:pt-28">
        <MainLayout className="pt-28 lg:pt-0 relative overflow-hidden">
          <div className="flex flex-col md:flex-row justify-center items-center w-full gap-8">
            <div className="w-full md:hidden lg:inline-block lg:w-1/2">
              <Image
                src={profilePic}
                alt="Daniela Manzano"
                className="profilePic border-8 border-yellow dark:border-yellow"
                priority={true}
                sizes="(max-width: 700px) 50vw, (max-width: 600px) 40vw, 40vw"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center self-center text-center md:text-start">
              <AnimatedText
                title="Hola soy Dani y espero seamos equipo."
                className="!text-3xl sm:!text-5xl lg:!text-6xl text-center 2xl:!text-6xl lg:!text-left dark:text-light"
              />
              
              <Socials />
              <div className="flex items-center lg:self-start mt-4 pb-8 gap-4">
                <Link
                  href="/book"
                  className="flex items-center bg-transparent text-dark dark:text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-dark hover:border-dark dark:border-light dark:hover:bg-yellow dark:hover:text-dark hover:bg-yellow"
                >
                  Contacto
                </Link>
                <Link
                  href="/Abdulrazak-Abubakar-(Azacdev)-CV.pdf"
                  target="_blank"
                  className="flex items-center bg-transparent text-dark dark:text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-dark hover:border-dark dark:border-light dark:hover:bg-yellow dark:hover:text-dark hover:bg-yellow"
                  download={true}
                >
                  Curriculum
                  <LinkArrow className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-0 mb-12 lg:my-12 flex flex-col gap-8 sm:gap-16">
            <RecentProjects
              key={recentProject.id}
              src={recentProject.src}
              title={recentProject.title}
              tools={recentProject.tools}
              summary={recentProject.description} link={""} github={""}            />

            <RecentProjects
              key={recentProjectThree.id}
              src={recentProjectThree.src}
              title={recentProjectThree.title}
              tools={recentProjectThree.tools}
              summary={recentProjectThree.description} link={""} github={""}            />

            <RecentProjects
              key={recentProjectTwo.id}
              src={recentProjectTwo.src}
              title={recentProjectTwo.title}
              tools={recentProjectTwo.tools}
              summary={recentProjectTwo.description} link={""} github={""}            />
          </div>

          <div className="flex items-center justify-end lg:justify-center my-10 lg:my-20">
            <Link
              href="/projects"
              className="flex items-center bg-yellow text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-yellow hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark dark:hover:dark:border-light dark:hover:bg-yellow dark:hover:text-light"
            >
              Mas Proyectos
            </Link>
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
