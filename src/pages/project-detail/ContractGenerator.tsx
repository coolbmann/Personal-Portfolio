import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { Github } from "../../assets/svg-files";
import Web from "../../assets/svg-files/Web";
import Video from "../../assets/project-videos/Contract-Generator.mp4";

const ContractGenerator = () => {
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
            <div className="m-0">CONTRACT GENERATOR</div>
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
            A script for creating PDFs with dynamic information.
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-medium">Overview</span>
            </div>
            <div className="text-[13px] leading-5 font-light">
              This project was created out of a real-world business need.
              <br />
              <br />
              In my first few months at MILKRUN, part of my responsibility
              having owned the rider supply and onboarding function was to
              create employment contracts for ~50 new hires per week.
              <br />
              <br />
              This{" "}
              <span className="font-normal text-custom-orange">
                script
              </span>{" "}
              allowed me to save 3.5 hours per week, which would otherwise have
              been used manually clicking and copy/pasting field data such as
              names and addresses into a template document before sharing via
              DocuSign.
              <br />
              <br />
              As part of the project, I wrote a comprehensive how-to guide which
              allowed me to pass on this tool to the next owner as I shifted my
              area of responsibility away from onboarding.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-medium">Technologies Used</span>
            </div>
            <div className="text-[13px] leading-5 font-light">
              <span className="font-normal text-custom-orange">JavaScript</span>{" "}
              was used to write the automation, hosted on the Google Apps Script
              platform.
              <br />
              <br />
              This allowed me to leverage{" "}
              <span className="font-normal text-custom-orange">
                Google Sheets as the UI
              </span>{" "}
              and provided seamless connection with Google Drive as the document
              storage solution.
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
                    Auto-fill existing placeholder text with real data;
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Select destination folder in Google drive;
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Generate an unlimited amount of documents in one run;
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Automatically convert finished document into a downloadable
                    PDF.
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
              View the live sheet{" "}
              <a
                href="https://docs.google.com/spreadsheets/d/1Ed2Xymlpe5NcSQnswnuqDThG6TL_uQRcjjUwlS0zsis/edit?usp=sharing"
                target="blank"
              >
                <span className="font-normal text-custom-orange hover:underline">
                  here
                </span>
              </a>
              .
              <br />
              <br />
              View the user guide{" "}
              <a
                href="https://docs.google.com/document/d/1wKKooBaRSzwePu-RoUYEMHRTRGERWN5HNzFlIfRi7L8/edit?usp=sharing"
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

export default ContractGenerator;
