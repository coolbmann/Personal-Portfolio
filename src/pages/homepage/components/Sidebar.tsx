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
    <div className="hidden sticky top-0 sm:overscroll-none sm:flex sm:flex-col sm:justify-center sm:items-center sm:gap-4 sm:w-80 sm:h-screen sm:border-r-2 sm:border-solid sm:border-gray-400/15 sm:z-10">
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
