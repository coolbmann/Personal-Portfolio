import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Github } from "../../assets/svg-files";
import Web from "../../assets/svg-files/Web";
import Video from "../../assets/project-videos/new-noggin.mp4";

const Noggin = () => {
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
          <video
            className="w-full aspect-video object-cover border-gray-200 border-2"
            autoPlay
            controls
            muted
            loop
          >
            <source src={Video} type="video/mp4" />
          </video>

          {/* Implement fallback component */}
          {/* <div className="w-full aspect-video bg-purple-300"></div>  */}
        </div>
        <div>
          <div className="flex justify-between items-center font-bebas text-5xl">
            <div className="m-0">NOGGIN</div>
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
            A full-stack quiz hub with session based user-management.
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-medium">Overview</span>
            </div>
            <div className="text-[13px] leading-5 font-light">
              This project was inspired by agruably my favourite daily company
              ritual in my time at MILKRUN: 5PM Trivia.
              <br />
              <br />
              This is a{" "}
              <span className="font-normal text-custom-orange">
                full-stack application
              </span>
              , with a minimal layer of authentication, automated through
              session cookies. When users open the app, a unique user instance
              is provisioned and becomes accessible in the browser for 24 hours.
              <br />
              <br />
              During this window, users have the ability to complete quizzes to
              collect points and make their way up the community leaderboard.
              <br />
              <br />
              Users also have the ability to contribute by creating "Community
              Made" quizzes, with the help of our question generation engine to
              fill in the gaps where needed.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-medium">Technologies Used</span>
            </div>
            <div className="text-[13px] leading-5 font-light">
              <span className="font-normal text-custom-orange">React</span> and{" "}
              <span className="font-normal text-custom-orange">Node.js</span>{" "}
              powers the front and back-end respectively, alongside a{" "}
              <span className="font-normal text-custom-orange">
                PostgreSQL{" "}
              </span>
              database hosted on Supabase.
              <br />
              <br />
              Both FE and BE is written in{" "}
              <span className="font-normal text-custom-orange">TypeScript</span>
              , and{" "}
              <span className="font-normal text-custom-orange">Express</span>{" "}
              leveraged as the server side framework. No ORM was used for this
              project.
              <br />
              <br />
              The static site and web service is hosted through{" "}
              <span className="font-normal text-custom-orange">Render</span> as
              the hosting provider.
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
                    Browse through quizzes and complete trivia in a multiple
                    choice style quiz;
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Drag-and-drop functionality to re-order question sequence in
                    the quiz creator;
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Question generation engine to support the creation of
                    "Community Made" quizzes;
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Persisted, session-based user provisioning;
                  </div>
                </li>

                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Custom made toast component to handle warning, error and
                    success notifications in the UI.
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
              <a href="https://noggin-app.bryanherijanto.com/" target="blank">
                <span className="font-normal text-custom-orange hover:underline">
                  noggin-app.bryanherijanto.com
                </span>
              </a>
              .
              <br />
              <br />
              View the Github repo{" "}
              <a
                href="https://github.com/coolbmann/Project_Noggin/tree/master"
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

export default Noggin;
