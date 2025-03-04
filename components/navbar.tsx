"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { MoonIcon, SunIcon } from "./icons";
import useThemeSwitcher from "@/hooks/use-theme-switcher";
import { Contact, Home, LucideWorkflow, Menu, User } from "lucide-react";

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
      className={`${className} relative group hover:bg-yellow px-3 py-2 hover:text-lfont rounded-md transition-colors duration-200 ${
        pathname.endsWith(href)
          ? "bg-yellow text-lfont"
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
      <nav className="bg-cblue text-lfont w-full fixed top-0 justify-between items-center hidden md:flex p-6 md:p-8 md-px-12 lg:px-32 md:py-4 font-medium z-10">
        <Link href="/">
          <h1 className="text-xl md:text-2xl text-lfont">Daniela Manzano</h1>
        </Link>
        <div>
          <CustomLink href="/" title="Home" className="mr-2" />
          <CustomLink href="/about" title="Experience" className="mx-2" />
          <CustomLink href="/projects" title="Projects" className="mx-2" />
          <CustomLink href="/contact" title="Contact" className="ml-2" />
        </div>
      </nav>

      {/* Mobile Nav */}
      <nav className="fixed top-0 left-0 block md:hidden w-full z-10">
        <div className="h-12 flex items-center justify-between py-[5px] relative px-6">
          <div className="cursor-pointer" onClick={() => showMenu(!toggle)}>
            <Menu className="h-8 w-8" />
          </div>

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

        <div
          className={`${
            toggle ? "bottom-0" : "bottom-[-600%]"
          } fixed left-0 right-0 w-full pt-8 px-6 pb-16 rounded-tl-3xl rounded-tr-3xl z-[60] bg-light border-t border-dark transition-all duration-300`}
        >
          <div className="grid grid-cols-3 gap-8 text-sm text-lfont">
            <Link
              href="/"
              className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
              onClick={() => showMenu(false)}
            >
              <Home />
              Home
            </Link>
            <Link
              href="/about"
              className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
              onClick={() => showMenu(false)}
            >
              <User />
              Info
            </Link>
            <Link
              href="/projects"
              className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
              onClick={() => showMenu(false)}
            >
              <LucideWorkflow />
              Proyectos
            </Link>
            <Link
              href="/contact"
              className="flex flex-col justify-center items-center gap-3 cursor-pointer hover:scale-110 relative group"
              onClick={() => showMenu(false)}
            >
              <Contact />
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

