import React, { RefObject } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -25 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col mx-auto">
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </motion.div>
  );
};

export default Homepage;
