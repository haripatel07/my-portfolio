import { RxCross2 } from "react-icons/rx";

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`fixed w-full top-0 left-0 bg-black/95 backdrop-blur-2xl z-50 flex flex-col items-center justify-center transition-all duration-500 gap-10 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isMenuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-8 right-8 text-3xl text-gray-400 hover:text-white focus:outline-none cursor-pointer transition-transform hover:rotate-90 duration-300"
        aria-label="Close Menu"
      >
        <RxCross2 />
      </button>

      {["Home", "About", "Projects", "Certificates", "Contact"].map((item, index) => (
        <a
          key={item}
          onClick={() => setIsMenuOpen(false)}
          href={`#${item.toLowerCase()}`}
          style={{ transitionDelay: `${index * 50}ms` }}
          className={`text-4xl font-serif italic text-gray-300 hover:text-white transform transition-all duration-500 ${
            isMenuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {item}
        </a>
      ))}
    </div>
  );
}

export default MobileMenu;
