import React from "react";

const Sidebar = () => {
  return (
    <div className="sticky top-0 overscroll-none flex flex-col justify-center items-center gap-4 w-80 h-screen border-r-2 border-solid border-gray-400/15">
      <div className="font-bebas text-4xl">Bryan Herijanto</div>
      <div className="flex flex-col gap-2 text-sm">
        <div>About</div>
        <div>Portfolio</div>
        <div>Contact</div>
      </div>
    </div>
  );
};

export default Sidebar;
