import React, { useState, useEffect } from "react";
import heroImg from "../assets/Home/h1.png";
import { Link as ScrollLink } from "react-scroll";

export default function Home() {
  const titles = ["Web Developer", "Full Stack Developer", "Front-End Developer", "Web Master"];
  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    const handleType = () => {
      const fullText = titles[titleIndex];
      if (isDeleting) {
        setText(fullText.substring(0, text.length - 1));
        setSpeed(50);
      } else {
        setText(fullText.substring(0, text.length + 1));
        setSpeed(150);
      }

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    };

    const timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, titleIndex]);

  return (
    <section className="h-screen md:h-screen  text-[#EAF4FF] flex items-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 w-full py-6 md:py-0">
        <div className="flex flex-row items-stretch justify-center gap-4 sm:gap-6 md:grid md:grid-cols-2 md:gap-10 md:items-center">

          {/* LEFT IMAGE */}
<div className="flex justify-center md:justify-center relative flex-shrink-0 h-full animate-zoomIn md:-mr-6 lg:-mr-10">
  <img
    src={heroImg}
    alt="Harshit"
    className="w-[150px] sm:w-[200px] md:w-[320px] lg:w-[350px]
               object-contain h-full
               [mask-image:linear-gradient(to_top,transparent_5%,black_50%)]
               [-webkit-mask-image:linear-gradient(to_top,transparent_2%,black_60%)]"
  />
</div>


          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center items-start text-left space-y-2 sm:space-y-3 flex-1 min-w-0">
            <p className="text-lg sm:text-xl text-[#BFD4E6] font-playfair italic tracking-wide font-bold animate-slideInUp" style={{ animationDelay: "0.2s" }}>
              Hello I’m
            </p>

            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-playfair leading-tight animate-slideInUp"
              style={{
                animationDelay: "0.4s",
                color: "#EAF4FF",
                textShadow: `
                  0 0 2px #47C5E5,
                  0 0 4px #47C5E5,
                  0 0 6px #47C5E5
                `
              }}
            >
              HARSHIT ARORA
            </h1>

            <h2
              className="text-xs sm:text-sm md:text-2xl font-playfair italic animate-slideInUp"
              style={{ animationDelay: "0.6s" }}
            >
              And I’m a{" "}
              <span className="text-[#47C5E5] font-orbitron not-italic font-bold whitespace-nowrap">
                {text}
                <span className="border-r-2 border-[#47C5E5] animate-blink ml-1"></span>
              </span>
            </h2>

            <p
              className="text-[#BFD4E6] text-sm sm:text-base md:text-base leading-relaxed max-w-full md:max-w-[520px] text-justify py-2 sm:py-4 animate-slideInUp"
              style={{ fontFamily: "DM Sans", animationDelay: "0.8s" }}
            >
              Passionate full-stack web developer with hands-on experience in React,
              JavaScript, technologies of backend, and UI/UX design. Proficient in building
              responsive, scalable web apps.
            </p>

            <div className="flex gap-x-2 sm:gap-x-3 md:gap-x-4 mt-2 w-full animate-slideInUp" style={{ animationDelay: "1s" }}>
  <button
    className="flex-1 sm:flex-none bg-[#3DB4D7] text-[#12325B] px-2 sm:px-6 md:px-8 py-1.5 sm:py-2.5 tracking-wide hover:opacity-90 transition text-xs sm:text-sm md:text-base whitespace-nowrap"
    style={{ fontFamily: "Montserrat" }}
  >
    HIRE ME
  </button>

  <ScrollLink
    to="contact"          // Make sure your contact section has id="contact"
    smooth={true}
    duration={600}         // Match navbar scrolling duration
    offset={-80}           // Optional: adjust for fixed navbar
    className="flex-1 sm:flex-none border-2 border-[#3DB4D7] px-2 sm:px-6 md:px-8 py-1.5 sm:py-2.5 tracking-wide hover:bg-[#3DB4D7] hover:text-[#12325B] transition text-xs sm:text-sm md:text-base whitespace-nowrap"
    style={{ fontFamily: "Montserrat", cursor: "pointer" }}
  >
    Contact me
  </ScrollLink>
</div>
          </div>

        </div>
      </div>

      {/* Bottom Row */}
      <div className="absolute bottom-2 sm:bottom-4 w-full flex justify-center px-4">
        <div
          className="flex items-center justify-center gap-2 sm:gap-6 md:gap-10 flex-nowrap text-xs sm:text-sm md:text-base text-[#BFD4E6]"
          style={{ fontFamily: "Poppins" }}
        >
          <span>Scalable Apps</span>
          <span className="text-[#3DB4D7]">|</span>
          <span>Responsive Designs</span>
          <span className="text-[#3DB4D7]">|</span>
          <span>Creative Styling</span>
          <span className="text-[#3DB4D7]">|</span>
          <span>Quality Content</span>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }

          .animate-zoomIn {
            animation: zoomIn 1s ease forwards;
          }
          @keyframes zoomIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }

          .animate-slideInUp {
            animation: slideInUp 0.8s ease-out forwards;
            opacity: 0;
          }

          @keyframes slideInUp {
            0% {
              transform: translateY(40px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }

          /* Smooth all transitions */
          button, h1, h2, p {
            transition: all 1s ease-in-out;
          }
        `}
      </style>
    </section>
  );
}
