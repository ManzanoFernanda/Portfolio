import type { Metadata } from "next";
import AnimatedText from "@/components/animation/animated-text";
import MainLayout from "@/components/main-layout";
import FeaturedProjects from "./components/recent-projects";
import { projectsData } from "@/config/data";
import Projects from "./components/projects";
import TransitionEffect from "@/components/animation/transition";

export const metadata: Metadata = {
  title: "Web & Mobile Projects Portfolio",
  description:
    "Explore a collection of projects by Azacdev, a Software and Web Developer. From responsive websites to innovative mobile apps, discover my skills and passion for crafting digital solutions.",
};

const ProjectsPage = () => {
  const featureProject = projectsData[0];

  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light lg:pt-12">
        <MainLayout className="pt-16">
          <AnimatedText
            title="Imagination Trumps Knowledge!"
            className="mb-16 dark:text-light !text-4xl sm:!text-6xl lg:!text-7xl"
          />

          <div className="grid grid-cols-12 gap-y-8 md:gap-y-20 md:gap-x-8 xl:gap-x-16 xl:gap-y-32">
            <div className="col-span-12">
              <FeaturedProjects
                key={featureProject.id}
                src={featureProject.src}
                title={featureProject.title}
                tools={featureProject.tools}
                summary={featureProject.description} link={""} github={""}              
              />
            </div>

            {projectsData.slice(1).map((item) => (
              <div className="col-span-12 md:col-span-6" key={item.id}>
                <Projects
                  src={item.src}
                  title={item.title}
                  tools={item.tools}
                  summary={item.description} link={""} github={""}               
                />
              </div>
            ))}
          </div>
        </MainLayout>
      </main>
    </>
  );
};

export default ProjectsPage;
