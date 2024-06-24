import { useRef, useState } from "react";
import "./index.css";
import Sidebar from "./pages/homepage/components/Sidebar";
import About from "./pages/homepage/components/About";
import Experience from "./pages/homepage/components/Experience";
import Portfolio from "./pages/homepage/components/Portfolio";
import Contact from "./pages/homepage/components/Contact";
import Footer from "./pages/homepage/components/Footer";

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
        <div className="flex flex-col mx-auto">
          <About refProp={aboutRef} />
          <Experience />
          <Portfolio refProp={portfolioRef} />
          <Contact refProp={contactRef} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
