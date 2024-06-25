import React, { RefObject } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const Homepage = () => {
  return (
    <div className="flex flex-col mx-auto">
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default Homepage;
