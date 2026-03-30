import { MdLightMode, MdDarkMode } from "react-icons/md";

function ThemeToggle({ isDarkMode, setIsDarkMode }) {
  return (
    <button
      onClick={() => setIsDarkMode(!isDarkMode)}
      className="p-2 rounded-full border border-border-subtle bg-bg-off backdrop-blur-md text-text-main hover:text-accent-blue transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-accent-main"
      aria-label="Toggle Theme"
    >
      {isDarkMode ? (
        <MdLightMode className="text-xl hover:rotate-90 transition-transform duration-500" />
      ) : (
        <MdDarkMode className="text-xl hover:-rotate-90 transition-transform duration-500" />
      )}
    </button>
  );
}

export default ThemeToggle;
