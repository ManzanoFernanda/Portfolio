import type { Metadata } from "next";
import { ArrowRight, Facebook, Mail } from "lucide-react";

import AnimatedText from "@/components/animation/animated-text";
import MainLayout from "@/components/main-layout";
import Footer from "@/components/footer";
import ContactForm from "./components/contact-form";
import TransitionEffect from "@/components/animation/transition";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="w-full mb-8 flex flex-col items-center justify-center gap-2 dark:text-light lg:pt-9">
        <MainLayout className="pt-16">
          <AnimatedText
            title="Connect with me"
            className="mb-3 dark:text-yellow text-yellow !text-4xl sm:!text-6xl lg:!text-6xl"
          />
          <div className="justify-center flex-col items-center grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col justify-center items-center mx-auto">
                <h3 className="text-[2rem] text-center font-medium mb-6 text-yellow dark:text-light">
                Let&apos;s create something amazing together!
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
