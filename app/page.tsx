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
      <main className="flex text-lfont w-full h-screen bg-cblue">
        <MainLayout className="pt-2 lg:pt-0 relative overflow-hidden">
          <div className="flex flex-col md:flex-row w-full gap-20">
            <div className="relative w-1000 sm:w-1000 md:w-1000 lg:w-500">
              <Image
                src={foto1}
                alt="Daniela Manzano"
                width={900}
                height={600}
                priority={true}
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col items-center self-center text-center md:text-start">
              <AnimatedText
                title="Hello, I&apos;m Dani, and I hope we can be a team."
                className="!text-3xl sm:!text-5xl lg:!text-6xl text-center 2xl:!text-6xl lg:!text-left text-lfont"
              />
              <Socials />
              <div className="flex items-center lg:self-start mt-4 pb-8 gap-4">
                <Link
                  href="/book"
                  className="flex items-center bg-transparent text-lfont p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-lfont hover:border-lfont hover:bg-yellow"
                >
                  Contact
                </Link>
                <a
                  href="/DanielaManzano.pdf"
                  target="_blank"
                  className="flex items-center bg-transparent text-lfont p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-lfont hover:border-lfont hover:bg-yellow"
                  download={true}
                >
                  Resume
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
