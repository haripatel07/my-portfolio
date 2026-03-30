import { FaXTwitter } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaSquareGithub } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="w-full border-t border-white/5 bg-transparent mt-20 relative z-20">
      <div className="max-w-5xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-gray-400 font-sans text-sm tracking-wide font-medium">
          © {new Date().getFullYear()} Hari Patel. All rights reserved.
        </p>
        <div className="flex gap-8">
          <a
            href="https://x.com/AJDevil07"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-xl hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/haripatel87"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-xl hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <SlSocialLinkedin />
          </a>
          <a
            href="https://github.com/haripatel07"
            className="text-gray-400 hover:text-white transition-colors duration-300 text-xl hover:scale-110 transform"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaSquareGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
