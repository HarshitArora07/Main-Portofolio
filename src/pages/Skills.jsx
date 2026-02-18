import React, { useState } from "react";
import { motion } from "framer-motion";

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen text-[#EAF4FF] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full py-16 flex flex-col gap-16">

        {/* ================= TECH STACK ================= */}
        <div>
          <motion.h2
  className="text-3xl md:text-4xl font-bold text-[#47C5E5] mb-10 font-orbitron text-center"
  initial={{ opacity: 0, scale: 0.4 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  Tech Stack
</motion.h2>

          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {/* Languages */}
            <motion.div
              variants={cardVariants}
              whileHover={{
  y: -10,             // lift up
  scale: 1.05,        // slight zoom
  boxShadow: "0 0 30px #47C5E5", // neon blue glow
  borderColor: "#3DB4F2"         // blue border
}}

              className="bg-[#E6E6E6] text-[#12325B] p-6 md:p-8 rounded-3xl flex flex-col
                shadow-lg border border-transparent"
            >
              <h3 className="text-2xl font-semibold mb-6">Languages</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Java","Python","C","JavaScript","HTML","CSS","SQL"].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white py-2 px-5 rounded-full text-center text-xs sm:text-sm font-medium
                    flex items-center justify-center w-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Frameworks */}
            <motion.div
              variants={cardVariants}
              whileHover={{
  y: -10,             // lift up
  scale: 1.05,        // slight zoom
  boxShadow: "0 0 30px #47C5E5", // neon blue glow
  borderColor: "#3DB4F2"         // blue border
}}

              className="bg-[#E6E6E6] text-[#12325B] p-6 md:p-8 rounded-3xl flex flex-col
                shadow-lg border border-transparent"
            >
              <h3 className="text-2xl font-semibold mb-6">Frameworks & Libraries</h3>
              <div className="grid grid-cols-2 gap-4">
                {["React.js","Node.js","Express.js","MongoDB","JavaScript"].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white py-2 px-5 rounded-full text-center text-xs sm:text-sm font-medium
                    flex items-center justify-center w-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Developer Tools */}
            <motion.div
              variants={cardVariants}
              whileHover={{
  y: -10,             // lift up
  scale: 1.05,        // slight zoom
  boxShadow: "0 0 30px #47C5E5", // neon blue glow
  borderColor: "#3DB4F2"         // blue border
}}

              className="bg-[#E6E6E6] text-[#12325B] p-6 md:p-8 rounded-3xl flex flex-col
                shadow-lg border border-transparent"
            >
              <h3 className="text-2xl font-semibold mb-6">Developer Tools</h3>
              <div className="grid grid-cols-2 gap-4">
                {["Git","GitHub","VS Code"].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white py-2 px-5 rounded-full text-center text-xs sm:text-sm font-medium
                    flex items-center justify-center w-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              variants={cardVariants}
              whileHover={{
  y: -10,             // lift up
  scale: 1.05,        // slight zoom
  boxShadow: "0 0 30px #47C5E5", // neon blue glow
  borderColor: "#3DB4F2"         // blue border
}}

              className="bg-[#E6E6E6] text-[#12325B] p-6 md:p-8 rounded-3xl flex flex-col
                shadow-lg border border-transparent"
            >
              <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
              <div className="grid grid-cols-1 gap-4">
                {["Problem Solving","Team Collaboration","Time Management","Quick Learner"].map((item, index) => (
                  <span
                    key={index}
                    className="bg-white py-2 px-5 rounded-full text-center text-xs sm:text-sm font-medium
                    flex items-center justify-center w-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* ================= CERTIFICATIONS ================= */}
        <div>
          <motion.h2
  className="text-3xl md:text-4xl font-orbitron font-bold text-[#47C5E5] mb-10 text-center"
  initial={{ opacity: 0, scale: 0.4 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.3, ease: "easeOut" }}
>
  Certifications
</motion.h2>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
  y: -10,             // lift up
  scale: 1.05,        // slight zoom
  boxShadow: "0 0 30px #47C5E5", // neon blue glow
  borderColor: "#3DB4F2"         // blue border
}}

                className="bg-[#C19474] p-2 rounded-xl flex flex-col items-center justify-start cursor-pointer
                  shadow-lg border border-transparent"
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
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>

      {/* FULLSCREEN IMAGE OVERLAY */}
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
