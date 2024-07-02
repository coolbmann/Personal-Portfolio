import { LinkedIn, Github } from "../../../assets/svg-files/index";

const Footer = () => {
  return (
    <div className="fixed bottom-0 right-0 pr-8 flex items-center justify-end gap-2 h-16 w-full bg-white">
      <div className="h-4">
        <a href="https://www.linkedin.com/in/bryan-herijanto/" target="_blank">
          <LinkedIn color="#000000" />
        </a>
      </div>
      <div className="h-4">
        <a href="https://github.com/coolbmann" target="_blank">
          <Github color="#000000" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
