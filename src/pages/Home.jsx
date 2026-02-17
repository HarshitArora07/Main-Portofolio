import React, { useState, useEffect } from "react";
import heroImg from "../assets/Home/h1.png";

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
    <section className="h-screen bg-[#12325B] text-[#EAF4FF] flex items-center relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 w-full">
        {/* Mobile: flex-row with items-stretch, Desktop: grid-cols-2 */}
        <div className="flex flex-row items-stretch justify-center gap-4 sm:gap-6 md:grid md:grid-cols-2 md:gap-10 md:items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start relative flex-shrink-0 h-full">
            <div className="absolute w-[150px] sm:w-[200px] md:w-[320px] h-[180px] sm:h-[240px] md:h-[360px] bg-[#47C5E5] rounded-[50px] -z-10"></div>
            <img
              src={heroImg}
              alt="Harshit"
              className="w-[150px] sm:w-[200px] md:w-[320px] lg:w-[350px] object-contain h-full"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center items-start text-left space-y-2 sm:space-y-3 flex-1 min-w-0">
            {/* Hello */}
            <p className="text-lg sm:text-xl text-[#BFD4E6] font-playfair italic tracking-wide font-bold">
              Hello I’m
            </p>

            {/* Name */}
            <h1
              className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight"
              style={{ fontFamily: "DM Sans" }}
            >
              HARSHIT ARORA
            </h1>

            {/* Subtitle with typewriter effect */}
            <h2 className="text-base sm:text-lg md:text-2xl font-playfair italic">
              And I’m a{" "}
              <span className="text-[#47C5E5] font-orbitron not-italic font-bold">
                {text}
                <span className="border-r-2 border-[#47C5E5] animate-blink ml-1"></span>
              </span>
            </h2>

            {/* Paragraph */}
            <p
              className="text-[#BFD4E6] text-sm sm:text-base md:text-base leading-relaxed max-w-full md:max-w-[520px] text-justify py-2 sm:py-4"
              style={{ fontFamily: "DM Sans" }}
            >
              Passionate full-stack web developer with hands-on experience in React,
              JavaScript, technologies of backend, and UI/UX design. Proficient in building
              responsive, scalable web apps.
            </p>

            {/* Buttons */}
<div className="flex gap-x-2 sm:gap-x-3 md:gap-x-4 mt-2">
  <button
    className="bg-[#3DB4D7] text-[#12325B] px-4 sm:px-6 md:px-8 py-2.5 tracking-wide hover:opacity-90 transition flex-shrink-0"
    style={{ fontFamily: "Montserrat" }}
  >
    HIRE ME
  </button>
  <button
    className="border-2 border-[#3DB4D7] px-4 sm:px-6 md:px-8 py-2.5 tracking-wide hover:bg-[#3DB4D7] hover:text-[#12325B] transition flex-shrink-0"
    style={{ fontFamily: "Montserrat" }}
  >
    Contact me
  </button>
</div>

          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="absolute bottom-4 w-full flex justify-center font-montserrat text-[#BFD4E6] text-sm sm:text-base tracking-wide px-4">
        <div className="flex flex-wrap gap-2 sm:gap-10 items-center justify-center" style={{ fontFamily: "Poppins" }}>
          <span>Scalable Apps</span>
          <span className="text-[#3DB4D7]">|</span>
          <span>Responsive Designs</span>
          <span className="text-[#3DB4D7]">|</span>
          <span>Creative Styling</span>
          <span className="text-[#3DB4D7]">|</span>
          <span>Quality Content</span>
        </div>
      </div>

      {/* Tailwind CSS for blinking cursor */}
      <style>
        {`
          .animate-blink {
            animation: blink 1s step-start infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
}
