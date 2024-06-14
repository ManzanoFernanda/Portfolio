"use client";
import React, { useState } from "react";
import { CircularText } from "./icons";

const HireMe = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div className="relative">
      <div className="absolute md:fixed right-0 left-auto top-0 bottom-auto md:left-4 md:bottom-4 md:top-auto md:left-auto overflow-hidden z-10">
        <div className="w-24 md:w-48 h-auto flex items-center justify-center relative overflow-hidden">
          <CircularText className={"dark:fill-light fill-dark animate-spin-slow w-[5.7rem] md:w-auto"} />
          <button
            onClick={openModal}
            className="flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark md:w-20 md:h-20 rounded-full font-semibold hover:bg-yellow hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-yellow dark:hover:text-dark w-12 h-12 text-[10px] md:text-base"
          >
            Hire Me
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
          <div className="relative bg-white p-6 rounded-lg w-full max-w-4xl h-full max-h-4xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
            >
              X
            </button>
            <iframe
              src="/DanielaManzanoCV.pdf"
              width="100%"
              height="100%"
              className="rounded-lg"
              title="Currículum de Daniela Manzano"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default HireMe;

