import { useContext } from "react";
import {
  Github,
  Email,
  LinkedIn,
  Phone,
} from "../../../assets/svg-files/index";
import { refContext } from "../../../App";

const Contact = () => {
  const { contactRef } = useContext(refContext);

  return (
    <div ref={contactRef} className="flex flex-col mt-8 gap-12">
      <div className=" py-4">
        <span className="bg-gray-200 px-8 py-4 text-sm">LET'S CHAT!</span>
      </div>
      <div>
        <span className="shadow-custom-inset">CONTACT INFORMATION</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-start gap-4">
            <div className="h-8">
              <Phone />
            </div>
            <div className="text-sm font-medium">Phone</div>
          </div>
          <div className="text-sm font-light">+61 439 138 229</div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-start gap-4">
            <div className="h-8">
              <Email />
            </div>
            <div className="text-sm font-medium">Email</div>
          </div>
          <div className="text-sm font-light text-ellipsis overflow-hidden">
            bryanherijanto@gmail.com
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-start gap-4">
            <div className="h-8">
              <LinkedIn color="#F35800" />
            </div>
            <div className="text-sm font-medium">LinkedIn</div>
          </div>
          <div className="text-sm font-light">
            <a
              href="https://www.linkedin.com/in/bryan-herijanto/"
              target="_blank"
              className="text-custom-orange hover:font-normal"
            >
              linkedin.com/in/bryan-herijanto
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-start gap-4">
            <div className="h-8">
              <Github color="#F35800" />
            </div>
            <div className="text-sm font-medium">GitHub</div>
          </div>
          <div className="text-sm font-light">
            <a
              href="https://github.com/coolbmann"
              target="_blank"
              className="text-custom-orange hover:font-normal"
            >
              github.com/coolbmann
            </a>
          </div>
        </div>
      </div>
      <div className="h-16 sm:h-32"></div>
    </div>
  );
};

export default Contact;
