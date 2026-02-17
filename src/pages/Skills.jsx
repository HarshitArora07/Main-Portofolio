import React, { useState } from "react";

import c1 from "../assets/Skills/c1.png";
import c2 from "../assets/Skills/c2.png";
import c3 from "../assets/Skills/c3.png";
import c4 from "../assets/Skills/c4.png";
import c5 from "../assets/Skills/c5.png";

export default function Skills() {
  const [openImage, setOpenImage] = useState(null);

  const certificates = [
    { img: c1, title: "Web Development" },
    { img: c2, title: "Database Foundations" },
    { img: c3, title: "Database Programming" },
    { img: c4, title: "Java Foundations" },
    { img: c5, title: "Java Fundamentals" },
  ];

  return (
    <section className="min-h-screen bg-[#12325B] text-[#EAF4FF] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full py-16 flex flex-col gap-16">

        {/* ================= TECH STACK ================= */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#47C5E5] mb-10 font-orbitron text-center">
            Tech Stack
          </h2>

          {/* Flex row on lg screens, column on smaller */}
          <div className="flex flex-col lg:flex-row gap-6">

            {/* ================= Languages ================= */}
            <div className="bg-[#E6E6E6] text-[#12325B] p-5 sm:p-6 md:p-8 rounded-3xl flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Java","Python","C","JavaScript","HTML","CSS","SQL"].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white py-2 px-4 rounded-full text-center text-sm font-medium flex items-center justify-center"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* ================= Frameworks ================= */}
            <div className="bg-[#E6E6E6] text-[#12325B] p-6 md:p-8 rounded-3xl flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">Frameworks & Libraries</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React.js","Node.js","Express.js","MongoDB","JavaScript"].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white py-2 px-4 rounded-full text-center text-sm font-medium flex items-center justify-center"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* ================= Developer Tools ================= */}
            <div className="bg-[#E6E6E6] text-[#12325B] p-6 md:p-8 rounded-3xl flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">Developer Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Git","GitHub","VS Code"].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white py-2 px-4 rounded-full text-center text-sm font-medium flex items-center justify-center"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* ================= Soft Skills ================= */}
            <div className="bg-[#E6E6E6] text-[#12325B] p-6 md:p-8 rounded-3xl flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-1 gap-4">
                {["Problem Solving","Team Collaboration","Time Management","Quick Learner"].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white py-2 px-4 rounded-full text-center text-sm font-medium flex items-center justify-center"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <div>
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold text-[#47C5E5] mb-10 text-center">
            Certifications
          </h2>

          {/* Flex row on lg screens, column on smaller */}
          <div className="flex flex-col lg:flex-row gap-4">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-[#C19474] p-2 rounded-xl flex flex-col items-center justify-start cursor-pointer flex-1"
                onClick={() => setOpenImage(cert.img)}
              >
                <img
                  src={cert.img}
                  alt={`certificate-${index}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                <h3 className="mt-1 text-sm md:text-base font-semibold text-black text-center tracking-wide">
                  {cert.title}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ========== FULLSCREEN IMAGE OVERLAY ========== */}
      {openImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setOpenImage(null)}
        >
          <img
            src={openImage}
            alt="certificate-full"
            className="max-h-full max-w-full rounded-lg shadow-lg"
          />
        </div>
      )}
    </section>
  );
}
