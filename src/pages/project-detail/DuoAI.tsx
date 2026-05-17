import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github } from "../../assets/svg-files";
import Web from "../../assets/svg-files/Web";
import Video from "../../assets/project-videos/duo_ai.mp4";
import NotePanel from "../../components/NotePanel";
import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router-dom";

const DuoAI = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 25 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <Link
        to="/"
        className="flex sm:hidden items-center gap-[2px] text-xs font-light mt-8"
      >
        <IoIosArrowRoundBack size={20} />
        <span>Back to home</span>
      </Link>
      <div className="flex flex-col gap-10 mx-auto">
        <div className="mt-4 sm:mt-24">
          <video
            ref={videoRef}
            className="w-full border-gray-200 border-2"
            autoPlay
            controls
            muted
            loop
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 font-bebas text-5xl">
            <div className="m-0">DUO AI</div>
            <div className="flex gap-1 h-4">
              <a href="https://github.com/coolbmann/duo-ai" target="blank">
                <Github color="#000000" />
              </a>
              <a href="https://www.duo-ai.bryanherijanto.com/" target="blank">
                <Web color="#000000" />
              </a>
            </div>
          </div>
          <div className="text-sm leading-5 font-light tracking-wide-custom mt-4 sm:mt-2">
            <span className="font-normal text-custom-orange">
              Multi-agent platform
            </span>{" "}
            for bespoke pickleball utilities to unify and{" "}
            <span className="font-normal text-custom-orange">
              access external API integrations.
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-semibold">Overview</span>
            </div>
            <div className="text-sm leading-5 font-light tracking-wide-custom">
              This is a passion project striving to bring convenience to
              practical, pickleball-related frustrations.
              <br />
              <br />
              The initial core of the platform is to solve the{" "}
              <span className="font-normal text-custom-orange">
                fragmented nature
              </span>{" "}
              of court-booking experience - caused by the vast booking ecosystem
              available to individual clubs - as well as the lack of intuitive
              UX to analyse DUPR matchplay sessions.
              <br />
              <br />I wanted to abstract away the complexity of those processes
              by building a{" "}
              <span className="font-normal text-custom-orange">
                multi-agent platform{" "}
              </span>{" "}
              that users can interact with via chat, for specific utilities.
              <br />
              <br />
              Currently all data integrations are unique - done by{" "}
              <span className="font-normal text-custom-orange">
                reverse-engineering publicly available APIs
              </span>{" "}
              across different systems, and using{" "}
              <span className="font-normal text-custom-orange">
                human-in-the-loop checkpoints
              </span>{" "}
              to verify decisions and narrow LLM contexts.
              <br />
              <br />
              For any other pickle-heads, I would love to hear any suggestions
              on useful agents to build!
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-semibold">Technologies Used</span>
            </div>
            <div className="text-sm leading-5 font-light tracking-wide-custom">
              <span className="font-normal text-custom-orange">React</span> and{" "}
              <span className="font-normal text-custom-orange">
                Node.js (TypeScript)
              </span>{" "}
              power the front and back-end respectively, backed by a{" "}
              <span className="font-normal text-custom-orange">Supabase</span>{" "}
              (PostgreSQL) database.
              <br />
              <br />
              Socket.io maintains persistent{" "}
              <span className="font-normal text-custom-orange">
                WebSocket connections
              </span>{" "}
              to support the async, streaming nature of AI agent responses.
              <br />
              <br />
              We use the{" "}
              <span className="font-normal text-custom-orange">
                LangChain
              </span>{" "}
              framework for model access, as well as{" "}
              <span className="font-normal text-custom-orange">LangGraph</span>{" "}
              for agent task orchestration.
              <br />
              <br />
              Unlike past projects, given the real-time nature our data sources,
              we rely on calling external APIs and HIL checkpoints to narrow
              context instead of semantic retrieval via Pinecone data sources.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-semibold">Features</span>
            </div>
            <ul className="text-sm leading-5 font-light tracking-wide-custom flex flex-col gap-3">
              {[
                "Natural language court search - ask for courts by location, date, or time and the agent handles the rest.",
                "Multi-step LangGraph agent pipeline: intent classification → agent-selection → data-fetch → actionable output.",
                "Per-thread conversation memory, so follow-up questions retain context from earlier in the conversation.",
              ].map((item, i) => (
                <li key={i} className="relative flex">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full flex-shrink-0"></span>
                  <div className="pl-4">{item}</div>
                </li>
              ))}
            </ul>
            <NotePanel variant="info" title="Important Note">
              The platform does not currently support auth, meaning all users
              share a public account. Past conversations will be publicly
              available once session history feature is in production.
            </NotePanel>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-semibold">See it in Action!</span>
            </div>
            <div className="text-sm leading-5 font-light tracking-wide-custom">
              View the live app at{" "}
              <a href="https://www.duo-ai.bryanherijanto.com/" target="blank">
                <span className="font-normal text-custom-orange hover:underline">
                  duo-ai.bryanherijanto.com
                </span>
              </a>
              .
              <br />
              <br />
              View the Github repo{" "}
              <a href="https://github.com/coolbmann/duo-ai" target="blank">
                <span className="font-normal text-custom-orange hover:underline">
                  here
                </span>
                .
              </a>
            </div>
          </div>
        </div>
        <div className="h-12"></div>
      </div>
    </motion.div>
  );
};

export default DuoAI;
