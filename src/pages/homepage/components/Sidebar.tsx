interface props {
  aboutClickHandler: () => void;
  portfolioClickHandler: () => void;
  contactClickHandler: () => void;
  homeClickHandler: () => void;
}

const Sidebar = ({
  aboutClickHandler,
  portfolioClickHandler,
  contactClickHandler,
  homeClickHandler,
}: props) => {
  return (
    <div className="hidden sticky top-0 sm:overscroll-none sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-4 sm:w-80 sm:h-screen sm:border-r-2 sm:border-solid sm:border-gray-400/15 sm:z-10">
      <button onClick={homeClickHandler}>
        <div className="font-bebas text-4xl">Bryan Herijanto</div>
      </button>
      <div className="flex flex-col gap-2 text-sm font-light">
        <button onClick={aboutClickHandler} className="hover:cursor-pointer">
          About
        </button>
        <button onClick={portfolioClickHandler} className="hover:cursor-pointer">
          Portfolio
        </button>
        <button onClick={contactClickHandler} className="hover:cursor-pointer">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
