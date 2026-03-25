import { useEffect } from "react";
import { motion } from "framer-motion";
import { Github } from "../../assets/svg-files";
import Web from "../../assets/svg-files/Web";
import Video from "../../assets/project-videos/new-noggin.mp4";
import NotePanel from "../../components/NotePanel";

const LindaAI = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 25 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 25 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col gap-10 mx-auto">
        <div className="mt-8 sm:mt-24">
          <video
            className="w-full aspect-video object-cover border-gray-200 border-2"
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
            <div className="m-0">LINDA AI</div>
            <div className="flex gap-1 h-4">
              <a href="https://github.com/placeholder" target="blank">
                <Github color="#000000" />
              </a>
              <a href="https://placeholder.com" target="blank">
                <Web color="#000000" />
              </a>
            </div>
          </div>
          <div className="text-sm leading-5 font-light tracking-wide-custom mt-4 sm:mt-2">
            An intelligent{" "}
            <span className="font-normal text-custom-orange">
              real-time audio transcription
            </span>{" "}
            and{" "}
            <span className="font-normal text-custom-orange">
              RAG-powered knowledge retrieval
            </span>{" "}
            tool.
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-semibold">Overview</span>
            </div>
            <div className="text-sm leading-5 font-light tracking-wide-custom">
              This project was driven by my curiosity to work with AI
              orchestration and understand more about LLM architectures under
              the hood.
              <br />
              <br />
              I wanted to bring together two elements — the ability to capture
              ideas quickly (voice) and the ability to retrieve that knowledge
              in a structured way (RAG).
              <br />
              <br />
              The app presents users with a familiar chat interface, and a{" "}
              <span className="font-normal text-custom-orange">
                collection-based directory
              </span>{" "}
              system. These collections can contain multiple "sessions", each of
              which can contain one or more recordings.
              <br />
              <br />
              When users start a recording, we generate a{" "}
              <span className="font-normal text-custom-orange">
                transcription in real-time
              </span>{" "}
              which is later refined and cleaned using the whole audio context
              once the recording is finished. AI summaries and titles are
              automatically generated to make the audio logging experience as
              frictionless as possible.
              <br />
              <br />
              Using the 'Collections' and 'Sessions' system as a natural way to
              group information, users can then query the chat to retrieve{" "}
              <span className="font-normal text-custom-orange">
                RAG-enhanced responses
              </span>
              , based on their current place in the directory.
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
                Spring Boot (Java 21)
              </span>{" "}
              power the front and back-end respectively, alongside a{" "}
              <span className="font-normal text-custom-orange">PostgreSQL</span>{" "}
              database hosted on Supabase.
              <br />
              <br />
              We rely on{" "}
              <span className="font-normal text-custom-orange">
                Spring WebSockets
              </span>{" "}
              to maintain persistent connections and support the async nature of
              AI generation, with{" "}
              <span className="font-normal text-custom-orange">
                Spring Data JPA
              </span>{" "}
              for traditional ORM support.
              <br />
              <br />
              Realtime transcriptions, content generation, and text-embeddings
              rely on a combination of the following{" "}
              <span className="font-normal text-custom-orange">
                OpenAI
              </span>{" "}
              models and services:
              <ul className="mt-2 mb-2 ml-4">
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4">
                    <code className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                      GPT-4o
                    </code>
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4">
                    <code className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                      GPT-4.1-mini
                    </code>
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4">
                    <code className="font-mono text-xs bg-gray-100 px-1.5 py-0.5 rounded">
                      text-embedding-3-small
                    </code>
                  </div>
                </li>
              </ul>
              <span className="font-normal text-custom-orange">Pinecone</span>{" "}
              is used for storing vector embeddings and semantic search.
              <br />
              <br />
              Since the orchestration and implementation of AI capabilities were
              hand-rolled, this project did not leverage available AI libraries
              like{" "}
              <span className="font-normal text-custom-orange">
                LangChain4j
              </span>
              .
              <br />
              <br />
              <NotePanel variant="info" title="Important Note">
                Since a functional auth systen is a WIP in the app, any
                recordings uploaded is publicly accessible. All data will be
                deleted and reset with seed data every 24 hours.
              </NotePanel>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-lg font-semibold">See it in Action!</span>
            </div>
            <div className="text-sm leading-5 font-light tracking-wide-custom">
              View the live app at{" "}
              <a href="https://placeholder.com" target="blank">
                <span className="font-normal text-custom-orange hover:underline">
                  placeholder.com
                </span>
              </a>
              .
              <br />
              <br />
              View the Github repo{" "}
              <a href="https://github.com/placeholder" target="blank">
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

export default LindaAI;
