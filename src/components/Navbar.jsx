import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "HOME", to: "home" },
    { name: "ABOUT", to: "about" },
    { name: "SKILLS", to: "skills" },
    { name: "PROJECTS", to: "projects" },
    { name: "CONTACT", to: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? "bg-[#08162A] shadow-md" : "bg-transparent"
  }`}
>
  <div
    className={`max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 
    flex items-center justify-between transition-all duration-300
    ${scrolled ? "py-2" : "py-4"}`}
  >
    {/* Logo */}
    <h1
      className={`font-bold tracking-wide transition-all duration-300 ${
        scrolled
          ? "text-xl sm:text-2xl"
          : "text-2xl sm:text-3xl"
      }`}
    >
      PORT<span className="text-[#47C5E5]">FOLIO</span>
    </h1>

    {/* Desktop Menu */}
    <ul className="hidden md:flex items-center gap-6 lg:gap-10 xl:gap-14 text-sm lg:text-base tracking-wide">
      {menuItems.map((item) => (
        <li key={item.name}>
          <ScrollLink
            to={item.to}
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer hover:text-[#47C5E5] transition"
          >
            {item.name}
          </ScrollLink>
        </li>
      ))}
    </ul>

    {/* Desktop Download CV */}
    <div className="hidden md:flex">
      <button
        className="flex items-center gap-2 
        bg-[#47C5E5] text-[#12325B] 
        px-3 sm:px-4 lg:px-5 
        py-1.5 sm:py-2 
        rounded-md font-medium 
        text-xs sm:text-sm lg:text-base
        hover:opacity-90 transition whitespace-nowrap"
      >
        DOWNLOAD CV
        <Download size={18} />
      </button>
    </div>

    {/* Mobile Section */}
    <div className="flex md:hidden items-center gap-3">
      <button
        className="flex items-center gap-1.5 
        bg-[#47C5E5] text-[#12325B] 
        px-3 py-1.5 
        rounded-md text-sm font-medium 
        hover:opacity-90 transition"
      >
        CV <Download size={16} />
      </button>

      <button onClick={() => setIsOpen(true)}>
        <Menu size={24} />
      </button>
    </div>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="fixed inset-0 z-50 flex justify-center items-start bg-black/40 backdrop-blur-sm">
      <div className="mt-20 bg-[#12325B]/95 rounded-xl w-11/12 max-w-sm p-6 flex flex-col gap-6 relative">
        <button
          className="absolute top-4 right-4 text-white hover:text-[#47C5E5] transition"
          onClick={() => setIsOpen(false)}
        >
          <X size={24} />
        </button>

        {menuItems.map((item) => (
          <ScrollLink
            key={item.name}
            to={item.to}
            smooth={true}
            duration={600}
            offset={-80}
            className="cursor-pointer text-white text-lg font-medium hover:text-[#47C5E5] transition"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </ScrollLink>
        ))}
      </div>
    </div>
  )}
</nav>

  );
}
