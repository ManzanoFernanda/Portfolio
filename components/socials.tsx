"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "./icons";

const Socials = () => {
  return (
    <div className="flex items-center justify-center my-4 md:hidden">
      <motion.a
        href="https://github.com/ManzanoFernanda"
        target="_blank"
        className="w-8 mr-3"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <GithubIcon />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/danielamanzano/"
        target="_blank"
        className="w-8 mx-3"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <LinkedInIcon />
      </motion.a>
    </div>
  );
};

export default Socials;
