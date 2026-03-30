import profileImg from "../assets/profileImg.jpeg";
import { FiDownload } from "react-icons/fi";

function Home() {
  return (
    <section
      id="home"
      className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6 relative z-10"
    >
      <div className="flex flex-col items-center max-w-5xl mx-auto">
        
        {/* Cyberpunk Status Badge */}
        <div className="mb-8 px-4 py-1.5 rounded-full border border-accent-main/30 bg-accent-main/5 backdrop-blur-md shadow-[0_0_15px_rgba(var(--color-accent-main),0.2)] animate-pulse">
          <span className="font-mono text-xs md:text-sm font-bold text-accent-main uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-main"></span>
            System Online
          </span>
        </div>

        {/* Profile Image - Elegant Circle */}
        <div className="mb-10 lg:mb-12 relative group">
          <div className="absolute inset-0 bg-accent-sub/20 rounded-full blur-2xl group-hover:bg-accent-main/30 transition-colors duration-700"></div>
          <img
            className="w-32 h-32 md:w-40 md:h-40 object-cover object-bottom rounded-full border border-border-subtle shadow-2xl relative z-10 transition-all duration-700 hover:scale-[1.03]"
            src={profileImg}
            alt="Hari Patel"
          />
        </div>

        {/* Massive Serif Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif font-medium text-text-main leading-[1.1] mb-8 tracking-tight">
          Hari Patel. <span className="italic text-text-muted font-light">AI Engineer</span>
          <br className="hidden md:block" /> & Full-Stack{" "}
          <span className="italic font-light bg-clip-text text-transparent bg-gradient-to-r from-accent-main to-accent-sub">
            Developer.
          </span>
        </h1>

        {/* Clean Subtext */}
        <p className="text-text-muted font-sans text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
          I specialize in machine learning, deep learning, and building scalable, high-performance applications with intuitive AI at their core.
        </p>

        {/* Elegant Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
          <a
            className="w-full sm:w-auto flex items-center justify-center bg-text-main text-bg-base px-8 py-4 rounded-full font-sans font-medium text-base hover:opacity-80 transition-opacity duration-300 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            href="#contact"
          >
            Let's Connect
          </a>
          <a
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-bg-off/50 backdrop-blur-md border border-border-subtle text-text-main px-8 py-4 rounded-full font-sans font-medium text-base hover:bg-bg-off hover:border-accent-main/50 transition-all duration-300 group shadow-sm"
            href="resume.pdf"
            download="Hari_Patel_Resume.pdf"
          >
            <span>Resume</span>
            <FiDownload className="text-xl group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
