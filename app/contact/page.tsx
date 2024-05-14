import type { Metadata } from "next";
import { ArrowRight, Facebook, Mail } from "lucide-react";

import AnimatedText from "@/components/animation/animated-text";
import MainLayout from "@/components/main-layout";
import Footer from "@/components/footer";
import ContactForm from "./components/contact-form";
import TransitionEffect from "@/components/animation/transition";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Dani, a passionate Software and Web Developer. Reach out for collaboration, inquiries, or to discuss your next digital project.",
};

const ContactPage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-between gap-5 dark:text-light lg:pt-12">
        <MainLayout className="pt-16">
          <AnimatedText
            title="Conéctate conmigo"
            className="mb-5 dark:text-yellow !text-4xl sm:!text-6xl lg:!text-7xl"
          />
          <div className="grid justify-between flex-col items-center grid-cols-1 gap-5 md:grid-cols-2">
            <div className="flex flex-col justify-center items-center mx-auto">
              <div className="flex flex-col text-center items-center gap-y-4">
                <div className="flex flex-col justify-center items-center gap-2 text-xl py-5 px-8 mt-4 button-primary text-light bg-black cursor-pointer rounded-xl w-[300px] group  hover:border-dark hover:bg-yellow hover:text-dark dark:bg-light dark:text-dark dark:hover:dark:border-light dark:hover:bg-yellow dark:hover:text-dark transition-all duration-300 border">
                  <Mail className="text-[2rem] mb-1" />
                    <h3 className="contact__card-title text-sm font-medium">
                    Email
                    </h3>
                    <span className="contact__card-data block mb-3 text-sm">
                    danielamanzano.dev@gmail.com
                    </span>
                  <a
                    href="danielamanzano.dev@gmail.com"
                    className="text-sm inline-flex items-center justify-center gap-x-1"
                    >
                    Write me
                    <ArrowRight
                     className="text-base duration-200 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </div>
            </div>
              <div className="bg-light flex flex-col justify-center items-center mx-auto">
                <h3 className="text-[2rem] text-center font-medium mb-6 text-yellow dark:text-light">
                ¡Hagamos algo increíble juntos!
                </h3>
               <ContactForm />
              </div>
          </div>
        </MainLayout>
      </main>
    </>
  );
};

export default ContactPage;
