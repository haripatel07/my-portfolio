import { useEffect } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { MdMenu } from "react-icons/md";

function Navbar({ isMenuOpen, setIsMenuOpen, isDarkMode, setIsDarkMode }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 bg-bg-off/60 backdrop-blur-xl border border-border-subtle shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] rounded-full px-6 py-3 transition-all duration-500 hover:bg-bg-off/80 hover:border-accent-sub/30 w-[90%] max-w-4xl flex justify-between items-center">
      <Logo />

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 font-sans text-sm font-medium tracking-wide">
          {["Home", "About", "Projects", "Certificates", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-text-muted hover:text-accent-main hover:text-shadow-glow transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="w-px h-6 bg-border-subtle hidden md:block"></div>

        <ThemeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        {!isMenuOpen && (
          <div
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="text-2xl z-40 md:hidden cursor-pointer font-sans text-text-main transition-transform hover:scale-110 ml-2"
          >
            <MdMenu />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
