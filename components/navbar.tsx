"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./icons";
import useThemeSwitcher from "@/hooks/use-theme-switcher";
import { Contact, Home, LucideWorkflow, Menu, User} from "lucide-react";

interface CustomLinkProps {
  href: string;
  title: string;
  className: string;
}

const CustomLink = ({ href, title, className }: CustomLinkProps) => {
  const pathname = usePathname();
  return (
    <Link
      href={href}
      className={`${className} relative group hover:bg-yellow px-3 py-2 hover:text-dark dark:hover:bg-yellow dark:hover:text-dark rounded-md transition-colors duration-200 ${
        pathname.endsWith(href)
          ? "bg-dark text-white dark:text-dark dark:bg-light"
          : ""
      }`}
      aria-label={title}
    >
      {title}
    </Link>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const [mode, setMode] = useThemeSwitcher();
  const [toggle, showMenu] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="w-full fixed top-0 justify-between items-center hidden md:flex p-6 md:p-8 md-px-12 lg:px-32 md:py-4 font-medium bg-light dark:bg-dark border-b border-dark dark:border-light dark:text-light rounded-bl-md rounded-br-md  z-10">
        <Link href="/">
          <h1 className="text-xl md:text-2xl font-bold">Daniela Manzano</h1>
        </Link>
        <div>
          <CustomLink href="/" title="Inicio" className="mr-2" />
          <CustomLink href="/about" title="Info" className="mx-2" />
          <CustomLink href="/projects" title="Proyectos" className="mx-2" />
          <CustomLink href="/contact" title="Contacto" className="ml-2" />
        </div>

        <div className="items-center justify-center flex-wrap flex">
          <motion.a
            href="https://github.com/ManzanoFernanda"
            target="_blank"
            className="w-8 mr-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <GithubIcon /> <span className="sr-only">Visit Github</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/danielamanzano/"
            target="_blank"
            className="w-8 mx-3"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
          >
            <LinkedInIcon /> <span className="sr-only">Visit LinkedIn</span>
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-3 flex items-center justify-center rounded-full p-1
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
            aria-label={`Toggle ${mode === "light" ? "dark" : "light"} mode`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>
        </div>
      </nav>

      <nav className="fixed bottom-0 left-0 block md:hidden w-full rounded-tl-md rounded-tr-md shadow-lg shadow-[#2A0E61]/5 bg-light dark:bg-dark border-t border-dark dark:border-light z-10 px-6">
        {/* Mobile Nav */}
        <div className="h-12 flex items-center justify-between py-[5px] relative">
          <button
            name="toggle-theme"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`flex items-center justify-center rounded-full p-1 w-7
          ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}
          `}
            aria-label={`Toggle ${mode === "light" ? "dark" : "light"} mode`}
          >
            {mode === "dark" ? (
              <SunIcon className={"fill-dark"} />
            ) : (
              <MoonIcon className={"fill-dark"} />
            )}
          </button>

          <div
            className={`${
              toggle ? "bottom-0" : "bottom-[-600%]"
            } fixed left-0 right-0 w-full pt-8 px-6 pb-16 rounded-tl-3xl rounded-tr-3xl z-[60] bg-light dark:bg-dark border-t border-dark dark:border-light transition-all duration-300`}
          >
            <div className="grid grid-cols-3 gap-8 text-sm text-dark dark:text-light">
              <Link
                href="/"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
                onClick={() => showMenu(false)}
              >
                <Home />
                Inicio
                <span
                  className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    pathname.endsWith("/") ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
              <Link
                href="/about"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
                onClick={() => showMenu(false)}
              >
                <User />
                Info
                <span
                  className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    pathname.endsWith("/about") ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
              <Link
                href="/projects"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
                onClick={() => showMenu(false)}
              >
                <LucideWorkflow />
                Proyectos
                <span
                  className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    pathname.endsWith("/projects") ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
              <Link
                href="/contact"
                className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
                onClick={() => showMenu(false)}
              >
                <Contact />
                Contacto
                <span
                  className={`h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease-in-out duration-300 ${
                    pathname.endsWith("/contact") ? "w-full" : "w-0"
                  }`}
                >
                  &nbsp;
                </span>
              </Link>
            </div>

          </div>

          <div className="cursor-pointer" onClick={() => showMenu(!toggle)}>
            <Menu className="h-8 w-8" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
