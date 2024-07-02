import React, { Ref, RefObject } from "react";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <div className="font-bebas text-4xl">Bryan Herijanto</div>
      </Link>
      <div className="flex flex-col gap-2 text-sm font-light">
        <Link to="/">
          <div onClick={aboutClickHandler} className="hover:cursor-pointer">
            About
          </div>
        </Link>
        <Link to="/">
          <div onClick={portfolioClickHandler} className="hover:cursor-pointer">
            Portfolio
          </div>
        </Link>

        <Link to="/">
          <div onClick={contactClickHandler} className="hover:cursor-pointer">
            Contact
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
