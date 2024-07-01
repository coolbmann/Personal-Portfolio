import React, { RefObject, useContext } from "react";
import nogginPic from "../../../assets/noggin.png";
import { refContext } from "../../../App";
import { Link } from "react-router-dom";
import orangeTile from "../../../assets/portfolioTile.png";
import padlockPic from "../../../assets/padlock.png";
import contractPic from "../../../assets/contractGeneratorPic.png";
import onCuePic from "../../../assets/oncue.png";

const Portfolio = () => {
  const { portfolioRef } = useContext(refContext);

  return (
    <div ref={portfolioRef} className="flex flex-col mt-8 gap-12">
      <div className=" py-4">
        <span className="bg-gray-200 px-8 py-4 text-sm">A PROJECT THAT...</span>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 gap-y-12">
        <Link to="/projects/noggin">
          <div className="flex flex-col gap-8">
            <div>
              <span className="shadow-custom-inset">
                IS A FULLSTACK APPLICATION
              </span>
            </div>
            <div className="h-96 w-10/12 border-solid border-2 group hover:cursor-pointer">
              <img
                src={nogginPic}
                alt=""
                className="object-cover h-48 w-full"
              />
              <div className="flex flex-col gap-4 px-8 py-4 text-sm font-light">
                <div className="font-medium text-base">Noggin</div>
                <div className="bg-gray-200 h-px"></div>
                <div className="text-xs h-12">
                  A full-stack quiz app where you can add your own questions and
                  go on the leaderboard!
                </div>
                <div className="w-24 gap-2 mt-2 overflow-hidden">
                  <div className="text-xs transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out ">
                    Read more
                  </div>
                  <div className="h-px w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out "></div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/projects/contract-generator">
          <div className="flex flex-col gap-8">
            <div>
              <span className="shadow-custom-inset">AUTOMATED MY WORK DAY</span>
            </div>
            <div className="h-96 w-10/12 border-solid border-2 group hover:cursor-pointer">
              <img
                src={contractPic}
                alt=""
                className="object-cover h-48 w-full"
              />
              <div className="flex flex-col gap-4 px-8 py-4 text-sm font-light">
                <div className="font-medium text-base">Contract Generator</div>
                <div className="bg-gray-200 h-px"></div>
                <div className="text-xs h-12">
                  A script leveraging the Google Suite to automate employment
                  contract generation and archiving workflows.
                </div>
                <div className="w-24 gap-2 mt-2 overflow-hidden">
                  <div className="text-xs transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out ">
                    Read more
                  </div>
                  <div className="h-px w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out "></div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/projects/padlock">
          <div className="flex flex-col gap-8">
            <div>
              <span className="shadow-custom-inset">TAUGHT ME JAVASCRIPT</span>
            </div>
            <div className="h-96 w-10/12 border-solid border-2 group hover:cursor-pointer">
              <img
                src={padlockPic}
                alt=""
                className="object-cover h-48 w-full"
              />
              <div className="flex flex-col gap-4 px-8 py-4 text-sm font-light">
                <div className="font-medium text-base">Padlock</div>
                <div className="bg-gray-200 h-px"></div>
                <div className="text-xs h-12">
                  A client-side app that allows you to set rules and generate
                  passwords of varying strengths!
                </div>
                <div className="w-24 gap-2 mt-2 overflow-hidden">
                  <div className="text-xs transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out ">
                    Read more
                  </div>
                  <div className="h-px w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out "></div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/projects/my-portfolio">
          <div className="flex flex-col gap-8">
            <div>
              <span className="shadow-custom-inset">YOU'RE LOOKING AT!</span>
            </div>
            <div className="h-96 w-10/12 border-solid border-2 group hover:cursor-pointer">
              <img
                src={orangeTile}
                alt=""
                className="object-cover h-48 w-full"
              />
              <div className="flex flex-col gap-4 px-8 py-4 text-sm font-light">
                <div className="font-medium text-base">Bryan's Portfolio</div>
                <div className="bg-gray-200 h-px"></div>
                <div className="text-xs h-12">
                  A personal website to showcase my experience and projects!
                </div>
                <div className="w-24 gap-2 mt-2 overflow-hidden">
                  <div className="text-xs transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out ">
                    Read more
                  </div>
                  <div className="h-px w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out "></div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link to="/projects/oncue">
          <div className="flex flex-col gap-8">
            <div>
              <span className="shadow-custom-inset">
                I'M CURRENTLY WORKING ON...
              </span>
            </div>
            <div className="h-96 w-10/12 border-solid border-2 group hover:cursor-pointer">
              <img
                src={onCuePic}
                alt=""
                className="object-cover h-48 w-full border-b-2"
              />
              <div className="flex flex-col gap-4 px-8 py-4 text-sm font-light">
                <div className="font-medium text-base">OnCue</div>
                <div className="bg-gray-200 h-px"></div>
                <div className="text-xs h-12">
                  An SMS service that texts you the position and ETA of your
                  preferred Sydney public transport service!
                </div>
                <div className="w-24 gap-2 mt-2 overflow-hidden">
                  <div className="text-xs transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out ">
                    Read more
                  </div>
                  <div className="h-px w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out "></div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="h-0"></div>
    </div>
  );
};

export default Portfolio;
