import { useContext } from "react";
import profilePic from "../../../assets/profilePic.jpeg";
import { TypeAnimation } from "react-type-animation";
import { refContext } from "../../../App";

const About = () => {
  const { aboutRef } = useContext(refContext);

  return (
    <div className="flex flex-col gap-36">
      {/* Name */}
      <div ref={aboutRef} className="flex flex-col gap-4">
        <div className="font-manrope font-bold text-4xl mt-44">
          Bryan Herijanto
        </div>
        <div className="text-sm text-gray-600 h-16 sm:h-auto tracking-wide-custom">
          <TypeAnimation
            sequence={[
              "Software Engineer (ex-product) from Sydney, Australia.",
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
      <div className="flex flex-col gap-12 tracking-wide-custom">
        <div>
          <span className="shadow-custom-inset">ABOUT INFORMATION</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <img className="w-32 h-32 rounded-full" src={profilePic} alt="" />
          <div>
            <div className="font-light text-[15px]">
              Hello! I'm <span className="font-semibold">Bryan Herijanto</span>.
              Excited about all things product, data, and software engineering.{" "}
              <br />
              <br />I have a background in high-growth{" "}
              <span className="font-semibold">
                operations strategy
              </span> and{" "}
              <span className="font-semibold">product management</span>, now a
              software engineer looking to build great and meaningful products.
              <br />
              <br />
              I'm a self-starter with a{" "}
              <span className="font-semibold">bias for action</span>, powered up
              by tokens.
              <br />
              <br />
              If you're on this page,{" "}
              <span className="font-semibold">drop me a line</span> and I'd love
              to grab a coffee and connect with you!
            </div>
          </div>
        </div>
        <div className="mt-8 font-manrope font-light text-sm flex flex-col gap-4 sm:grid sm:grid-cols-3 sm:grid-rows-2 sm:gap-y-4">
          <div>
            <span className=" text-custom-orange font-normal">Age:</span> 25
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
            React, Node.js, TypeScript, Python, Java, MySQL/PostgreSQL
          </div>
        </div>
        <div>
          <a
            className=" bg-custom-orange font-light text-sm text-white px-8 py-4"
            href="/HERIJANTO, Bryan - Resume.pdf"
            download="HERIJANTO, Bryan - Resume.pdf"
          >
            Download CV
          </a>
        </div>
        <div className="relative w-full h-8 flex items-center"></div>
      </div>
    </div>
  );
};

export default About;
