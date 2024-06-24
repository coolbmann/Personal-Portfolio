import React, { RefObject } from "react";
import nogginPic from "../../../assets/noggin.png";

interface props {
  refProp: RefObject<HTMLDivElement>;
}

const Portfolio = ({ refProp }: props) => {
  return (
    <div ref={refProp} className="flex flex-col mt-8 gap-12">
      <div className=" py-4">
        <span className="bg-gray-200 px-8 py-4 text-sm">A PROJECT THAT...</span>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-y-12">
        <div className="flex flex-col gap-8">
          <div>
            <span className="shadow-custom-inset">
              IS A FULLSTACK APPLICATION
            </span>
          </div>
          <div className="h-96 w-10/12 border-solid border-2 group hover:cursor-pointer">
            <img src={nogginPic} alt="" className="object-cover h-48 w-full" />
            <div className="flex flex-col gap-4 px-8 py-4 text-sm font-light">
              <div className="font-medium text-base">Noggin</div>
              <div className="bg-gray-200 h-px"></div>
              <div className="text-xs h-12">
                A full-stack quiz app where you can add your own questions and
                go on the leaderboard!
              </div>
              <div className="w-24 gap-2 mt-2 overflow-hidden">
                <div className="text-xs transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out ">
                  Read more
                </div>
                <div className="h-px w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <span className="shadow-custom-inset">AUTOMATED MY WORK DAY</span>
          </div>
          <div className="h-96 w-10/12 border-solid border-2 group hover:cursor-pointer">
            <img src={nogginPic} alt="" className="object-cover h-48 w-full" />
            <div className="flex flex-col gap-4 px-8 py-4 text-sm font-light">
              <div className="font-medium text-base">Noggin</div>
              <div className="bg-gray-200 h-px"></div>
              <div className="text-xs h-12">
                A full-stack quiz app where you can add your own questions and
                go on the leaderboard!
              </div>
              <div className="w-24 gap-2 mt-2 overflow-hidden">
                <div className="text-xs transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out ">
                  Read more
                </div>
                <div className="h-px w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <span className="shadow-custom-inset">TAUGHT ME JAVASCRIPT</span>
          </div>
          <div className="h-96 w-10/12 border-solid border-2 group hover:cursor-pointer">
            <img src={nogginPic} alt="" className="object-cover h-48 w-full" />
            <div className="flex flex-col gap-4 px-8 py-4 text-sm font-light">
              <div className="font-medium text-base">Noggin</div>
              <div className="bg-gray-200 h-px"></div>
              <div className="text-xs h-12">
                A full-stack quiz app where you can add your own questions and
                go on the leaderboard!
              </div>
              <div className="w-24 gap-2 mt-2 overflow-hidden">
                <div className="text-xs transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out ">
                  Read more
                </div>
                <div className="h-px w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out "></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div>
            <span className="shadow-custom-inset">
              I'M CURRENTLY WORKING ON...
            </span>
          </div>
          <div className="h-96 w-10/12 border-solid border-2 group hover:cursor-pointer">
            <img src={nogginPic} alt="" className="object-cover h-48 w-full" />
            <div className="flex flex-col gap-4 px-8 py-4 text-sm font-light">
              <div className="font-medium text-base">Noggin</div>
              <div className="bg-gray-200 h-px"></div>
              <div className="text-xs h-12">
                A full-stack quiz app where you can add your own questions and
                go on the leaderboard!
              </div>
              <div className="w-24 gap-2 mt-2 overflow-hidden">
                <div className="text-xs transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-in-out ">
                  Read more
                </div>
                <div className="h-px w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out "></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-0"></div>
    </div>
  );
};

export default Portfolio;
