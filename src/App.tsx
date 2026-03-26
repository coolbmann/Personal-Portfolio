import { RefObject, createContext, useRef } from "react";
import "./index.css";
import Sidebar from "./pages/homepage/components/Sidebar";
import Footer from "./pages/homepage/components/Footer";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

interface RefContextInterface {
  aboutRef: RefObject<HTMLDivElement> | null;
  portfolioRef: RefObject<HTMLDivElement> | null;
  contactRef: RefObject<HTMLDivElement> | null;
}

const refContext = createContext<RefContextInterface>({
  aboutRef: null,
  portfolioRef: null,
  contactRef: null,
});

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const scrollOrNavigate = (
    ref: RefObject<HTMLDivElement>,
    section: string
  ) => {
    if (location.pathname === "/") {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <div className="font-manrope flex">
      <Sidebar
        homeClickHandler={() => navigate("/")}
        aboutClickHandler={() => scrollOrNavigate(aboutRef, "about")}
        portfolioClickHandler={() => scrollOrNavigate(portfolioRef, "portfolio")}
        contactClickHandler={() => scrollOrNavigate(contactRef, "contact")}
      />
      <div className="flex flex-col mx-auto w-10/12 sm:w-6/12 max-w-4xl">
        <refContext.Provider value={{ aboutRef, portfolioRef, contactRef }}>
          <Outlet />
        </refContext.Provider>
        <Footer />
      </div>
    </div>
  );
}

export { App, refContext };
