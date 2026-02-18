import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/About/a.png";

export default function About() {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);
  const cardsRef = useRef([]);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
            observer.disconnect(); // trigger only once
          }
        });
      },
      { threshold: 0.2 } // trigger when 20% visible
    );

    if (headingRef.current) observer.observe(headingRef.current);
  }, []);

  return (
    <section className=" text-[#EAF4FF] py-12 md:py-8 relative overflow-visible">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 w-full">

        {/* ===== Heading + Paragraph Section ===== */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center mb-8 md:mb-6">
          
          {/* Heading + Paragraph */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2
              ref={headingRef}
              className={`text-3xl md:text-4xl lg:text-5xl font-bold font-poppins transition-all duration-1000
                ${animate ? "animate-slideInLeft opacity-100" : "opacity-0"}
              `}
            >
              Who Am I?
            </h2>

            <p
              ref={paragraphRef}
              className={`text-[#BFD4E6] mt-4 md:mt-5 max-w-[750px] font-montserrat text-justify text-sm md:text-base lg:text-lg leading-relaxed mx-auto md:mx-0 transition-all duration-1000
                ${animate
                  ? "lg:animate-slideIn opacity-100 animate-slideUpLine delay-200"
                  : "opacity-0"
                }`}
            >
              I am a passionate and detail-oriented Full-Stack Developer
              with a strong foundation in modern web technologies including
              React, JavaScript, Node.js, and MongoDB. I enjoy building scalable,
              responsive, and user-friendly applications that solve real-world problems.
            </p>
          </div>

          {/* Desktop Image */}
          <div
            ref={imageRef}
            className={`hidden lg:block ml-6 flex-shrink-0 transition-all duration-1000
              ${animate ? "animate-slideInRight opacity-100" : "opacity-0"}
            `}
          >
            <img
              src={aboutImg}
              alt="About Me"
              className="h-full max-h-[250px] object-contain"
            />
          </div>
        </div>

        {/* ===== Education + Experience Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Education Card */}
          <div
            ref={(el) => (cardsRef.current[0] = el)}
            className={`card-3d bg-[#173B6C] p-5 md:p-8 rounded-2xl shadow-lg flex flex-col
  transform transition-[transform,box-shadow,border-color] duration-400 ease-out
  border border-white/20
  hover:border-[#3DB4F2]
  hover:-translate-y-2
  hover:scale-[1.015]
  hover:shadow-[0_10px_20px_rgba(61,180,242,0.35),0_0_15px_rgba(61,180,242,0.25)]
  ${animate ? "animate-slideUpCard opacity-100" : "opacity-0"}
`}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#47C5E5] mb-4 md:mb-5 font-poppins tracking-wide">
              Education
            </h3>
            <h4 className="text-lg md:text-xl font-semibold font-montserrat">
              B.Tech in Computer Science
            </h4>
            <p className="text-[#BFD4E6] mt-2 font-montserrat text-sm md:text-base">
              Sharda University
            </p>
            <p className="text-[#BFD4E6] mt-2 md:mt-3 font-montserrat text-sm md:text-base">
              2022 – 2026 | CGPA: 8.5+
            </p>
          </div>

          {/* Experience Card */}
          <div
            ref={(el) => (cardsRef.current[1] = el)}
            className={`card-3d bg-[#173B6C] p-5 md:p-8 rounded-2xl shadow-lg flex flex-col
  transform transition-[transform,box-shadow,border-color] duration-400 ease-out
  border border-white/20
  hover:border-[#3DB4F2]
  hover:-translate-y-2
  hover:scale-[1.015]
  hover:shadow-[0_10px_20px_rgba(61,180,242,0.35),0_0_15px_rgba(61,180,242,0.25)]
  ${animate ? "animate-slideUpCard opacity-100 delay-150" : "opacity-0"}
`}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#47C5E5] mb-4 md:mb-5 font-poppins tracking-wide">
              Experience
            </h3>
            <h4 className="text-lg md:text-xl font-semibold font-montserrat">
              Web Development Intern
            </h4>
            <p className="text-[#BFD4E6] mt-2 font-montserrat text-sm md:text-base">
              Researchscrypt | 2025
            </p>
            <p className="text-[#BFD4E6] mt-2 md:mt-3 font-montserrat text-sm md:text-base leading-relaxed">
              Worked on frontend development, responsive design,
              and UI integration for production-level web applications.
            </p>
          </div>
        </div>
      </div>

      {/* Tailwind Animations */}
      <style>
        {`
          @keyframes slideUpLine {
            0% { transform: translateY(20px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes slideInLeft {
            0% { transform: translateX(-50px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            0% { transform: translateX(90px); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideUpCard {
            0% { transform: translateY(40px); opacity: 0; }
            100% { transform: translateY(0); opacity: 1; }
          }
          @keyframes zoomIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
            
          .animate-slideUpLine { animation: slideUpLine 0.6s ease-out forwards; }
          .animate-slideInLeft { animation: slideInLeft 1s ease-out forwards; }
          .animate-slideInRight { animation: slideInRight 1s ease-out forwards; }
          .animate-slideUpCard { animation: slideUpCard 0.8s ease-out forwards; }
          .animate-zoomIn { animation: zoomIn 0.8s ease-out forwards; }
        `}
      </style>
    </section>
  );
}
