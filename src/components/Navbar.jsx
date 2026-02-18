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
        className={`max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 
        flex items-center justify-between relative transition-all duration-300
        ${scrolled ? "py-2" : "py-4 md:py-5"}`} // smaller on scroll
      >
        {/* Logo */}
        <h1
  className={`font-bold tracking-wide z-10 transition-all duration-300 ${
    scrolled
      ? "text-2xl sm:text-2xl md:text-xl"   // slightly smaller when scrolled
      : "text-2xl sm:text-3xl md:text-3xl"   // bigger normally
  }`}
>
  PORT<span className="text-[#47C5E5]">FOLIO</span>
</h1>


        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-5 sm:gap-6 md:gap-14 text-sm sm:text-base md:text-base tracking-wide transition-all duration-300`}
        >
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
        <div className="hidden md:flex ml-auto z-10">
          <button
            className={`flex items-center gap-2 bg-[#47C5E5] text-[#12325B] px-3 sm:px-4 md:px-5 py-2 rounded-md font-medium text-sm sm:text-base md:text-base hover:opacity-90 transition`}
          >
            DOWNLOAD CV
            <Download size={16} />
          </button>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden ml-auto gap-3 z-10">
          <button className="flex items-center gap-1.5 bg-[#47C5E5] text-[#12325B] px-2.5 py-1.5 rounded-md text-sm sm:text-sm hover:opacity-90 transition">
            DOWNLOAD CV <Download size={14} />
          </button>
          <button onClick={() => setIsOpen(true)}>
            <Menu size={22} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 flex justify-center items-start bg-black/40 backdrop-blur-sm overflow-y-auto">
            <div className="mt-16 bg-[#12325B]/95 rounded-xl w-11/12 max-w-sm p-6 flex flex-col gap-5 relative">
              <button
                className="absolute top-4 right-4 text-white hover:text-[#47C5E5] transition"
                onClick={() => setIsOpen(false)}
              >
                <X size={22} />
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
      </div>
    </nav>
  );
}
