import { motion } from "framer-motion";
import React from "react";

const OnCue = () => {
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
          <div className="w-full h-[32.16rem] bg-gray-500"></div>
        </div>
        <div>
          <div className="font-bebas text-5xl">OnCue</div>
          <div className="text-sm font-light mt-2">
            A short description of what this is.
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-lg font-medium">Overview</span>
            </div>
            <div className="text-sm font-light">
              My job is simple and sophisticated, so it is possible to describe
              and simple, and flowery language. I love the feel and
              sophistication of its superiority. I like people with a keen mind
              and at the same time easy to talk to.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-lg font-medium">Technologies Used</span>
            </div>
            <div className="text-sm font-light">
              My job is simple and sophisticated, so it is possible to describe
              and simple, and flowery language. I love the feel and
              sophistication of its superiority. I like people with a keen mind
              and at the same time easy to talk to.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-lg font-medium">Features</span>
            </div>
            <div className="text-sm font-light">
              <ul>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    My job is simple and sophisticated, so it is possible to
                    describe and simple, and flowery language.
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    My job is simple and sophisticated, so it is possible to
                    describe and simple, and flowery language.
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    My job is simple and sophisticated, so it is possible to
                    describe and simple, and flowery language.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-lg font-medium">
                Challenges & Learnings
              </span>
            </div>
            <div className="text-sm font-light">
              My job is simple and sophisticated, so it is possible to describe
              and simple, and flowery language. I love the feel and
              sophistication of its superiority. I like people with a keen mind
              and at the same time easy to talk to.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-lg font-medium">See it in Action!</span>
            </div>
            <div className="text-sm font-light">
              My job is simple and sophisticated, so it is possible to describe
              and simple, and flowery language. I love the feel and
              sophistication of its superiority. I like people with a keen mind
              and at the same time easy to talk to.
            </div>
          </div>
        </div>
        <div className="h-12"></div>
      </div>
    </motion.div>
  );
};

export default OnCue;
