import type { Metadata } from "next";
import AnimatedText from "@/components/animation/animated-text";
import MainLayout from "@/components/main-layout";
import RecentProjects from "./components/projects";
import { projectsData } from "@/config/data";
import TransitionEffect from "@/components/animation/transition";

export const metadata: Metadata = {
  title: "Web & Mobile Projects Portfolio",
  description:
    "Explore a collection of projects by Azacdev, a Software and Web Developer. From responsive websites to innovative mobile apps, discover my skills and passion for crafting digital solutions.",
};

const ProjectsPage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light lg:pt-12">
        <MainLayout className="pt-16">
          <AnimatedText
            title="Proyectos y Colaboraciones"
            className="mb-8 dark:text-light text-dark !text-4xl sm:!text-6xl lg:!text-6xl"
          />

          <div className=" gap-y-8 md:gap-y-20 md:gap-x-8 xl:gap-x-16 xl:gap-y-32">
            {projectsData.map((item) => (
              <div className="col-span-12 md:col-span-6" key={item.id}>
                <RecentProjects
                  src={item.src}
                  title={item.title}
                  summary={item.description}
                  link={item.link}              />
              </div>
            ))}
          </div>
        </MainLayout>
      </main>
    </>
  );
};

export default ProjectsPage;
