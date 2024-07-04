import { motion } from "framer-motion";
import { useEffect } from "react";
import { Github } from "../../assets/svg-files";
import Web from "../../assets/svg-files/Web";
import Video from "../../assets/project-videos/Padlock-Demo.mov";

const Padlock = () => {
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
        <div className="mt-8 sm:mt-24">
          <video
            className="w-full aspect-video object-cover border-gray-200 border-2"
            autoPlay
            controls
            muted
            loop
          >
            <source src={Video} type="video/mp4" />
          </video>{" "}
          {/* Replace box with GIF of product */}
          {/* <div className="w-full aspect-video bg-purple-300"></div> */}
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 font-bebas text-5xl">
            <div className="m-0">PADLOCK</div>
            <div className="flex gap-1 h-4">
              <a
                href="https://github.com/coolbmann/Project-Padlock"
                target="blank"
              >
                <Github color="#000000" />
              </a>
              <a href="https://project-padlock.onrender.com/" target="blank">
                <Web color="#000000" />
              </a>
            </div>
          </div>
          <div className="text-[13px] leading-5 font-light mt-4 sm:mt-2">
            A simple tool to generate random password strings.
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-medium">Overview</span>
            </div>
            <div className="text-[13px] leading-5 font-light">
              This simple project was the second I've built, which I used to
              gain practical experience with building business logic using
              JavaScript.
              <br />
              <br />
              Structured as a{" "}
              <span className="font-normal text-custom-orange">
                single-page application
              </span>
              , the app allows users to customise the character type to include
              in their password, as well as specify its length.
              <br />
              <br />
              The option also exists to include English words into the password
              to make it easier to remember.
              <br />
              <br />
              There is also strength logic baked into the app to determine the
              strength of the password based on it's length and variation in
              characters used.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-medium">Technologies Used</span>
            </div>
            <div className="text-[13px] leading-5 font-light">
              <span className="font-normal text-custom-orange">Vanilla JS</span>{" "}
              and
              <span className="font-normal text-custom-orange"> CSS</span> is
              used to build the logic and styling of the application.
              <br />
              <br />
              The static site is hosted through{" "}
              <span className="font-normal text-custom-orange">Render</span> as
              the hosting provider.
              <br />
              <br />
              Given the lightweight nature of the app, the entire codebase
              including service logic is hosted on the client-side.
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
                  <div className="pl-4 ">
                    Choose one or many character options from uppercase,
                    lowercase, numbers and symbols;
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Include lexical words from the English language;
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">Slider to select desired length;</div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Strength gauge for the generated password;
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
              View the live app at{" "}
              <a href="https://padlock-app.bryanherijanto.com/" target="blank">
                <span className="font-normal text-custom-orange hover:underline">
                  padlock-app.bryanherijanto.com
                </span>
              </a>
              .
              <br />
              <br />
              View the Github repo{" "}
              <a
                href="https://github.com/coolbmann/Project-Padlock"
                target="blank"
              >
                <span className="font-normal text-custom-orange hover:underline">
                  here
                </span>
                .
              </a>
            </div>
          </div>
        </div>
        <div className="h-12"></div>
      </div>
    </motion.div>
  );
};

export default Padlock;
