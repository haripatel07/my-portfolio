import { useState, useEffect } from "react";
import Navbar from "./Ui/Navbar";
import MobileMenu from "./Ui/MobileMenu";
import LoadingScreenAnimation from "./Ui/LoadingScreenAnimation";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import { Contact } from "./sections/Contact";
import RevealOnScroll from "./Ui/RevealOnScroll";
import Footer from "./sections/Footer";
import Certificates from "./sections/Certificates";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" || 
        (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return true; // Default to dark for the cyberpunk vibe
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  return (
    <div className="relative min-h-screen bg-bg-base text-text-main font-sans selection:bg-accent-main/30 selection:text-accent-sub overflow-hidden transition-colors duration-500">
      {/* Ambient Background Glows */}
      <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-700">
        <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-[var(--color-glow-main)] blur-[120px] dark:mix-blend-screen opacity-[0.08] dark:opacity-20 animate-pulse transition-colors duration-700"></div>
        <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-[var(--color-glow-sub)] blur-[100px] dark:mix-blend-screen opacity-[0.08] dark:opacity-20 animate-pulse transition-colors duration-700" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-[var(--color-accent-blue)] blur-[120px] dark:mix-blend-screen opacity-[0.05] dark:opacity-15 animate-pulse transition-colors duration-700" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10">
        {!isLoading && (
          <LoadingScreenAnimation onComplete={() => setIsLoading(true)} />
        )}
        <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        
        <main className="flex flex-col gap-24 md:gap-32 pt-32 pb-20">
          <RevealOnScroll>
            <Home />
          </RevealOnScroll>
          <About />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
