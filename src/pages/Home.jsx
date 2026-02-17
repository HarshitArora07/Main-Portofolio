import React, { useState, useEffect } from "react";
import heroImg from "../assets/Home/h1.png";

export default function Home() {
  const titles = ["Web Developer", "Full Stack Developer","Front-End Developer","Web Master"]; // texts to rotate
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
        // wait before deleting
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
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start relative">
            <div className="absolute w-[240px] h-[280px] md:w-[320px] md:h-[360px] bg-[#47C5E5] rounded-[50px] -z-10"></div>
            <img
              src={heroImg}
              alt="Harshit"
              className="w-[240px] md:w-[320px] lg:w-[350px] object-contain"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            {/* Hello */}
            <p className="text-xl text-[#BFD4E6] mb-1 font-playfair italic tracking-wide font-bold">
              Hello I’m
            </p>

            {/* Name */}
            <h1
              className="text-3xl md:text-5xl font-bold leading-tight mb-1"
              style={{ fontFamily: "DM Sans" }}
            >
              HARSHIT ARORA
            </h1>

            {/* Subtitle with typewriter effect */}
            <h2 className="text-lg md:text-2xl mb-3 font-playfair italic">
              And I’m a{" "}
              <span className="text-[#47C5E5] font-orbitron not-italic font-bold">
                {text}
                <span className="border-r-2 border-[#47C5E5] animate-blink ml-1"></span>
              </span>
            </h2>

            {/* Paragraph */}
            <p
              className="text-[#BFD4E6] max-w-[520px] text-sm md:text-base text-justify leading-relaxed py-4"
              style={{ fontFamily: "DM Sans" }}
            >
              Passionate full-stack web developer with hands-on experience in React,
              JavaScript, technologies of backend, and UI/UX design. Proficient in building
              responsive, scalable web apps.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
              <button
                className="bg-[#3DB4D7] text-[#12325B] px-8 py-2.5 tracking-wide hover:opacity-90 transition"
                style={{ fontFamily: "Montserrat" }}
              >
                HIRE ME
              </button>

              <button
                className="border-2 border-[#3DB4D7] px-8 py-2.5 tracking-wide hover:bg-[#3DB4D7] hover:text-[#12325B] transition"
                style={{ fontFamily: "Montserrat" }}
              >
                Contact me
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="absolute bottom-4 w-full flex justify-center font-montserrat text-[#BFD4E6] text-xl tracking-wide">
        <div className="flex gap-10 items-center" style={{ fontFamily: "Poppins" }}>
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
