import { RefObject, useContext, useEffect } from "react";
import About from "./components/About";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { refContext } from "../../App";

const Homepage = () => {
  const { aboutRef, portfolioRef, contactRef } = useContext(refContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)
      ?.scrollTo;
    if (!scrollTo) return;

    const refMap: Record<string, RefObject<HTMLDivElement> | null> = {
      about: aboutRef,
      portfolio: portfolioRef,
      contact: contactRef,
    };

    const target = refMap[scrollTo];
    if (target) {
      setTimeout(() => {
        target.current?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }

    navigate("/", { replace: true, state: null });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -25 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col mx-auto">
        <About />
        <Experience />
        <Portfolio />
        <Contact />
      </div>
    </motion.div>
  );
};

export default Homepage;
