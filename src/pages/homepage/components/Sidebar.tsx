import React, { Ref, RefObject } from "react";

interface props {
  aboutClickHandler: () => void;
  portfolioClickHandler: () => void;
  contactClickHandler: () => void;
}

const Sidebar = ({
  aboutClickHandler,
  portfolioClickHandler,
  contactClickHandler,
}: props) => {
  return (
    <div className="sticky top-0 overscroll-none flex flex-col justify-center items-center gap-4 w-80 h-screen border-r-2 border-solid border-gray-400/15 z-10">
      <div className="font-bebas text-4xl">Bryan Herijanto</div>
      <div className="flex flex-col gap-2 text-sm font-light">
        <div onClick={aboutClickHandler} className="hover:cursor-pointer">
          About
        </div>
        <div onClick={portfolioClickHandler} className="hover:cursor-pointer">
          Portfolio
        </div>
        <div onClick={contactClickHandler} className="hover:cursor-pointer">
          Contact
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
