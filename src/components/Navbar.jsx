import { Link as ScrollLink } from "react-scroll";
import { Download } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#12325B] text-white z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-10 py-3 sm:py-4 md:py-6 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-lg sm:text-xl md:text-3xl font-bold tracking-wide">
          PORT<span className="text-[#47C5E5]">FOLIO</span>
        </h1>

        {/* Center Menu */}
        <ul className="flex gap-4 sm:gap-6 md:gap-10 text-xs sm:text-sm md:text-base tracking-wider">
          <li>
            <ScrollLink 
              to="home" 
              smooth={true} 
              duration={600} 
              offset={-80} 
              className="cursor-pointer hover:text-[#47C5E5] transition"
            >
              HOME
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="about" 
              smooth={true} 
              duration={600} 
              offset={-80} 
              className="cursor-pointer hover:text-[#47C5E5] transition"
            >
              ABOUT
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="skills" 
              smooth={true} 
              duration={600} 
              offset={-80} 
              className="cursor-pointer hover:text-[#47C5E5] transition"
            >
              SKILLS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="projects" 
              smooth={true} 
              duration={600} 
              offset={-80} 
              className="cursor-pointer hover:text-[#47C5E5] transition"
            >
              PROJECTS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink 
              to="contact" 
              smooth={true} 
              duration={600} 
              offset={-80} 
              className="cursor-pointer hover:text-[#47C5E5] transition"
            >
              CONTACT
            </ScrollLink>
          </li>
        </ul>

        {/* Download CV Button */}
        <button className="flex items-center gap-2 bg-[#47C5E5] text-[#12325B] px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-lg font-medium text-xs sm:text-sm md:text-base hover:opacity-90 transition">
          DOWNLOAD CV
          <Download size={16} className="sm:!w-4 sm:!h-4 md:!w-5 md:!h-5" />
        </button>

      </div>
    </nav>
  );
}
