import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Github } from "../../assets/svg-files";
import Web from "../../assets/svg-files/Web";
import DisplayImage from "../../assets/portfolioTile.png";

const Resume = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 25 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-10 mx-auto">
        <div className="mt-24">
          <img src="" alt="" />
          {/* Replace box with GIF of product */}
          <div className="w-full aspect-video">
            <img className="object-cover" src={DisplayImage} alt="" />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-center font-bebas text-5xl">
            <div className="m-0">BRYAN'S PORTFOLIO WEBSITE</div>
            <div className="flex gap-1 h-4">
              <a
                href="https://github.com/coolbmann/Project_Noggin/tree/master"
                target="blank"
              >
                <Github color="#000000" />
              </a>
              <a href="https://noggin-app.bryanherijanto.com/" target="blank">
                <Web color="#000000" />
              </a>
            </div>
          </div>
          <div className="text-[13px] leading-5 font-light mt-2">
            A website to host my resume, experience, and projects.
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-medium">Overview</span>
            </div>
            <div className="text-[13px] leading-5 font-light">
              What you see is what you get - you're on the site right now!
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-medium">Technologies Used</span>
            </div>
            <div className="text-[13px] leading-5 font-light">
              <span className="font-normal text-custom-orange">React</span>{" "}
              powers this static site,{" "}
              <span className="font-normal text-custom-orange">Vite</span> used
              to quickly spin up the site. No CMS was used for this project.
              <br />
              <br />
              <span className="font-normal text-custom-orange">
                Tailwind CSS
              </span>{" "}
              is used for rapid development, and the site is hosted on{" "}
              <span className="font-normal text-custom-orange">Render</span>.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-medium">Features</span>
            </div>
            <div className="text-[13px] leading-5 font-light">
              <ul>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">Clean UI design;</div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Cool page transitions and auto-scroll capabilities;
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    You get to see a little bit of me!
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-medium">See it in Action!</span>
            </div>
            <div className="text-[13px] leading-5 font-light">
              You're looking at it 😎
            </div>
          </div>
        </div>
        <div className="h-12"></div>
      </div>
    </motion.div>
  );
};

export default Resume;
