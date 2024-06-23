import { useState } from "react";
import "./index.css";
import Sidebar from "./pages/homepage/components/Sidebar";
import About from "./pages/homepage/components/About";
import Experience from "./pages/homepage/components/Experience";
import Portfolio from "./pages/homepage/components/Portfolio";
import Contact from "./pages/homepage/components/Contact";

function App() {
  const [count, setCount] = useState(3);

  return (
    <div className="font-roboto flex">
      <Sidebar />
      {/* Main Body */}
      <div className="flex flex-col mx-auto w-6/12 max-w-6xl">
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default App;
