"use client";

import MainLayout from "@/components/main-layout";
import AnimatedText from "@/components/animation/animated-text";
import TransitionEffect from "@/components/animation/transition";
import { InlineWidget } from "react-calendly";

const BookPage = () => {
  return (
    <>
      <TransitionEffect />
      <main className="flex flex-col w-full items-center justify-center dark:text-yellow lg:pt-12">
        <MainLayout className="py-16">
        <div style={{ transform: "scale(0.7)" }}>
          <AnimatedText
            title="Agendar una Reunión"
            className="mb-16 dark:text-yellow text-yellow !text-4xl sm:!text-6xl lg:!text-6xl"
          />
        </div>

          <InlineWidget url="https://calendly.com/danielamanzano-dev/30min" />
        </MainLayout>
      </main>
    </>
  );
};

export default BookPage;
