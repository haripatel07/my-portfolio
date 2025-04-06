import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10">
        <div className="flex gap-10 p-4 justify-center text-white">
          <a
            href="https://x.com/AJDevil07"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-black text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/haripatel87"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-blue-700 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SlSocialLinkedin />
          </a>
          <a
            href="https://github.com/haripatel07"
            className="border p-2 text-2xl rounded hover:-translate-y-2 transition-all bg-gray-800 text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareGithub />
          </a>
        </div>
        <p>@ 2025 Hari. All rights reserved. </p>
      </div>
    </footer>
  );
}

export default Footer;
