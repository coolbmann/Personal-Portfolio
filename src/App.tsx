import { RefObject, createContext, useContext, useRef, useState } from "react";
import "./index.css";
import Sidebar from "./pages/homepage/components/Sidebar";
import Footer from "./pages/homepage/components/Footer";
import Homepage from "./pages/homepage/Homepage";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Noggin from "./pages/project-detail/Noggin";

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
  const [count, setCount] = useState(3);
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  return (
    <div className="font-roboto flex">
      <Sidebar
        aboutClickHandler={() => {
          aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
        portfolioClickHandler={() => {
          portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
        contactClickHandler={() => {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <div className="flex flex-col mx-auto w-6/12 max-w-4xl">
        <refContext.Provider value={{ aboutRef, portfolioRef, contactRef }}>
          <Outlet />
        </refContext.Provider>
        <Footer />
      </div>
    </div>
  );
}

export { App, refContext };
