import { useContext, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import nogginPic from "../../../assets/noggin.png";
import { refContext } from "../../../App";
import { Link } from "react-router-dom";
import orangeTile from "../../../assets/portfolioTile.png";
import padlockPic from "../../../assets/padlock.png";
import contractPic from "../../../assets/contractGeneratorPic.png";
import onCuePic from "../../../assets/oncueOTP.png";
import lindaAiPic from "../../../assets/lindaai.png";

const ProjectCard = ({
  to,
  tag,
  img,
  imgAlt = "",
  title,
  description,
  borderBottom = false,
}: {
  to: string;
  tag: string;
  img: string;
  imgAlt?: string;
  title: string;
  description: string;
  borderBottom?: boolean;
}) => (
  <Link to={to}>
    <div className="flex flex-col gap-8">
      <div>
        <span className="shadow-custom-inset">{tag}</span>
      </div>
      <div className="h-[26rem] border-solid border-2 group hover:cursor-pointer">
        <img
          src={img}
          alt={imgAlt}
          className={`object-cover h-56 w-full${borderBottom ? " border-b-2" : ""}`}
        />
        <div className="flex flex-col gap-4 px-8 py-4 text-sm font-light">
          <div className="font-medium text-base">{title}</div>
          <div className="bg-gray-200 h-px"></div>
          <div className="text-sm h-12">{description}</div>
          <div className="w-24 gap-2 mt-2 overflow-hidden">
            <div className="text-sm transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out">
              Read more
            </div>
            <div className="h-px w-4 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const Portfolio = () => {
  const { portfolioRef } = useContext(refContext);
  const [showAll, setShowAll] = useState(false);

  return (
    <div
      ref={portfolioRef}
      className="flex flex-col mt-8 gap-12 tracking-wide-custom"
    >
      <div className="flex items-center justify-between py-4">
        <span className="bg-gray-200 px-8 py-4 text-sm">A PROJECT THAT...</span>
        <button
          onClick={() => setShowAll((prev) => !prev)}
          className="text-sm font-light underline hover:cursor-pointer"
        >
          {showAll ? "Show less" : "View all"}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
        <ProjectCard
          to="/projects/linda-ai"
          tag="ORCHESTRATES AI MODELS"
          img={lindaAiPic}
          title="Linda AI"
          description="An intelligent real-time transcription and RAG-powered knowledge retrieval tool."
        />
        <ProjectCard
          to="/projects/contract-generator"
          tag="AUTOMATED MY WORK DAY"
          img={contractPic}
          title="Contract Generator"
          description="A script leveraging the Google Suite to automate employment contract generation and archiving workflows."
        />
        <AnimatePresence>
          {showAll && (
            <>
              {[
                {
                  to: "/projects/noggin",
                  tag: "IS A FULLSTACK APPLICATION",
                  img: nogginPic,
                  title: "Noggin",
                  description:
                    "A full-stack quiz app where you can add your own questions and go on the leaderboard!",
                },
                {
                  to: "/projects/padlock",
                  tag: "TAUGHT ME JAVASCRIPT",
                  img: padlockPic,
                  title: "Padlock",
                  description:
                    "A client-side app that allows you to set rules and generate passwords of varying strengths!",
                },
                {
                  to: "/projects/my-portfolio",
                  tag: "YOU'RE LOOKING AT!",
                  img: orangeTile,
                  title: "Bryan's Portfolio",
                  description:
                    "A personal website to showcase my experience and projects!",
                },
                {
                  to: "/projects/oncue",
                  tag: "I'M CURRENTLY WORKING ON...",
                  img: onCuePic,
                  title: "OnCue",
                  description:
                    "An SMS service that texts you the position and ETA of your preferred Sydney public transport service!",
                  borderBottom: true,
                },
              ].map((card, i) => (
                <motion.div
                  key={card.to}
                  initial={{ opacity: 0, y: -24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                    delay: i * 0.08,
                  }}
                >
                  <ProjectCard {...card} />
                </motion.div>
              ))}
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="h-0"></div>
    </div>
  );
};

export default Portfolio;
