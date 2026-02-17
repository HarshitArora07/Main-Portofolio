import React from "react";
import p1 from "../assets/Projects/p1.png";
import p2 from "../assets/Projects/p2.png";

export default function Projects() {
  const projects = [
    {
      img: p1,
      title: "Modern Bakery Website",
      description:
        "Responsive bakery website with modern UI, animations, and online ordering features.",
      techStack: "React • Tailwind • Framer Motion • MongoDB",
      liveDemo: "#",
      github: "#",
    },
    {
      img: p2,
      title: "AI Document Intelligence Platform",
      description:
        "AI-powered full-stack application that extracts text from documents and generates summaries and insights.",
      techStack: "React • Node.js • OpenAI • Tailwind",
      liveDemo: "#",
      github: "#",
    },
  ];

  return (
    <section className="bg-[#12325B] text-[#EAF4FF] py-12 md:py-3 flex flex-col items-center px-4 md:px-10">
      {/* ===== Heading ===== */}
      <h2 className="text-2xl font-orbitron sm:text-3xl md:text-4xl font-bold text-[#47C5E5] mb-2 md:mb-2 text-center">
        My Creations
      </h2>
      <p className="text-justify  md:text-center font-poppins max-w-4xl mb-6 md:mb-4 text-xs sm:text-sm md:text-base px-2">
        A collection of my full-stack and frontend projects showcasing my
        experience in building scalable and responsive web applications using
        modern technologies.
      </p>

      {/* ===== Projects Grid ===== */}
      <div className="w-full max-w-[900px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#E6E6E6] text-[#12325B] rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            {/* Image at top */}
            <div className="w-full flex justify-center">
              <img
                src={project.img}
                alt={`project-${index}`}
                className="w-full max-h-48 sm:max-h-56 object-contain object-top"
              />
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4 flex flex-col flex-1">
              <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1 text-center">
                {project.title}
              </h3>
              <p className="text-xs sm:text-xs md:text-sm mb-1 flex-1 text-justify">
                {project.description}
              </p>
              <p className="font-semibold mb-2 text-xs sm:text-xs md:text-sm">
                Tech Stack: {project.techStack}
              </p>

              {/* Buttons */}
              <div className="flex gap-2 mt-auto flex-col sm:flex-row">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center bg-[#57D3FF] text-[#12325B] font-semibold py-1.5 rounded-lg hover:bg-[#47C5E5] transition-colors text-xs sm:text-sm"
                >
                  LIVE DEMO
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center border-2 border-[#57D3FF] text-[#12325B] font-semibold py-1.5 rounded-lg hover:bg-[#57D3FF] hover:text-white transition-colors text-xs sm:text-sm"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
