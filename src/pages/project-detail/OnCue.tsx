import { motion } from "framer-motion";
import { useEffect } from "react";
import Video from "../../assets/project-videos/OnCue_Incomplete.mp4";

const OnCue = () => {
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

          {/* Implement fallback component */}
          {/* <div className="w-full aspect-video bg-purple-300"></div>  */}
        </div>
        <div>
          <div className="font-bebas text-5xl">OnCue</div>
          <div className="text-[13px] font-light mt-2">
            An SMS service that let's you subscribe to real-time transport
            updates.
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-lg font-medium">Overview</span>
            </div>
            <div className="text-[13px] font-light">
              This project is currently a WIP.
              <br />
              <br />
              Inspiration for the project came from my daily habit of leaving
              precisely 9 minutes before my bus arrives, in order to minimise
              the time waiting at my morning bus stop.
              <br />
              <br />
              This{" "}
              <span className="font-normal text-custom-orange">
                SMS service
              </span>{" "}
              allows users to login using an OTP, after which they can configure
              a <span className="font-normal text-custom-orange">cron-job</span>{" "}
              via the app to fire a real-time update of their preferred public
              transport vehicle directly via text message.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-lg font-medium">Technologies Used</span>
            </div>
            <div className="text-[13px] font-light">
              <span className="font-normal text-custom-orange">React</span>{" "}
              powers the front-end framework, while{" "}
              <span className="font-normal text-custom-orange">Node.js</span> is
              used as the runtime environment. Data is managed in{" "}
              <span className="font-normal text-custom-orange">PostgreSQL</span>{" "}
              hosted on Supabase.
              <br />
              <br />
              <span className="font-normal text-custom-orange">
                Tailwind CSS
              </span>{" "}
              is used for styling, and Express as a backend framework.{" "}
              <span className="font-normal text-custom-orange">TypeScript</span>{" "}
              is used across the codebase for improved type safety.
              <br />
              <br />
              This project also uses{" "}
              <span className="font-normal text-custom-orange">
                Twilio's SMS and Verify API
              </span>{" "}
              to power message delivery and{" "}
              <span className="font-normal text-custom-orange">
                TfNSW Open Data Hub
              </span>{" "}
              for static and real-time transport data.
              <br />
              <br />
              As with previous projects, the application will be hosted on
              <span className="font-normal text-custom-orange"> Render</span>.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-lg font-medium">Features</span>
            </div>
            <div className="text-[13px] font-light">
              <ul>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">Time-based notification alert.</div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">
                    Create unique alerts for specific stations/stops per
                    scheduled times;
                  </div>
                </li>
                <li className="relative flex list-inside">
                  <span className="absolute left-0 top-2 w-1 h-1 bg-custom-orange rounded-full"></span>
                  <div className="pl-4 ">SMS-based OTP for authentication.</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-lg font-medium">See it in Action!</span>
            </div>
            <div className="text-[13px] font-light">
              This project is a WIP.
              <br />
              <br />
              Keen an eye out on this page for release updates!
            </div>
          </div>
        </div>
        <div className="h-12"></div>
      </div>
    </motion.div>
  );
};

export default OnCue;
