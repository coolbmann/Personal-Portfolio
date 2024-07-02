import React, { ReactElement, RefObject, useContext } from "react";
import profilePic from "../../../assets/profilePic.jpeg";
import { TypeAnimation } from "react-type-animation";
import { refContext } from "../../../App";

const About = () => {
  const { aboutRef } = useContext(refContext);

  return (
    <div className="flex flex-col gap-36">
      {/* Name */}
      <div ref={aboutRef} className="flex flex-col gap-4">
        <div className="font-roboto font-bold text-3xl mt-44">
          Bryan Herijanto
        </div>
        <div className="text-sm text-gray-600">
          <TypeAnimation
            sequence={[
              "Strategy, Product, and aspiring Software Engineer from Sydney, Australia.",
              6000,
              "",
              200,
            ]}
            repeat={Infinity}
            speed={70}
            deletionSpeed={90}
          />
        </div>
      </div>
      {/* About Me */}
      <div className="flex flex-col gap-12">
        <div>
          <span className="shadow-custom-inset">ABOUT INFORMATION</span>
        </div>
        <div className="flex gap-8">
          <img className="w-32 h-32 rounded-full" src={profilePic} alt="" />
          <div>
            <div className="font-light text-sm">
              Hello! I’m <span className="font-medium">Bryan Herijanto</span>.
              Excited about all things product, data, and software engineering.{" "}
              <br />
              <br />I have experience in high-growth{" "}
              <span className="font-medium">operations strategy</span> and HR
              tech<span className="font-medium"> product management</span>. Now,
              I’m eager to get my hands dirty in the world of Software
              Engineering! <br />
              <br />
              I'm a self-starter with a{" "}
              <span className="font-medium">get sh*t done attitude</span>, and I
              believe growth is often only a Google Search and a good mentor
              away.
              <br />
              <br />
              If you're on this page,{" "}
              <span className="font-medium">drop me a line</span> and I'd love
              to grab a coffee and connect with you!
            </div>
          </div>
        </div>
        <div className="mt-8 font-roboto font-light text-sm grid grid-cols-3 grid-rows-2 gap-y-4">
          <div>
            <span className=" text-custom-orange font-normal">Age:</span> 23
          </div>
          <div>
            <span className=" text-custom-orange font-normal">Phone:</span> +61
            439 138 229
          </div>
          <div>
            <span className=" text-custom-orange font-normal">Email:</span>{" "}
            bryanherijanto@gmail.com
          </div>
          <div>
            <span className=" text-custom-orange font-normal">Location:</span>{" "}
            Sydney, Australia
          </div>
          <div className="col-span-2">
            <span className=" text-custom-orange font-normal">Stack: </span>
            React, Node.js, TypeScript, Python, MySQL/PostgreSQL
          </div>
        </div>
        <div>
          <button className=" bg-custom-orange font-light text-sm text-white px-8 py-4">
            <a
              href="public/HERIJANTO, Bryan - Resume.pdf"
              download="HERIJANTO, Bryan - Resume.pdf"
            >
              Download CV
            </a>
          </button>
        </div>
        <div className="relative w-full h-8 flex items-center"></div>
      </div>
    </div>
  );
};

export default About;
