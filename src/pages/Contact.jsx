import React, { useState } from "react";
import { motion } from "framer-motion";
import c1 from "../assets/Contact/c1.png";
import c2 from "../assets/Contact/c2.png";
import c3 from "../assets/Contact/c3.png";
import c4 from "../assets/Contact/c4.png";
import c5 from "../assets/Contact/c5.png";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  const getPhoneHref = () => {
    const phoneNumber = "9548484695";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    return isMobile ? `tel:${phoneNumber}` : `https://wa.me/${phoneNumber}`;
  };

  const contactItems = [
    { icon: c1, text: "contact.harshitonmail@gmail.com", href: "mailto:contact.harshitonmail@gmail.com" },
    { icon: c2, text: "linkedin.com/in/harshit-arora07", href: "https://www.linkedin.com/in/harshit-arora07" },
    { icon: c3, text: "github.com/HarshitArora07", href: "https://github.com/HarshitArora07" },
    { icon: c4, text: "Noida, U.P." },
    { icon: c5, text: "91 - 9548484695", href: getPhoneHref() },
  ];

  // Animation variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // items appear one by one
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const formVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="text-[#EAF4FF] flex justify-center px-6 md:px-20 py-10">
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

        {/* LEFT COLUMN - Contact Info */}
        <div className="flex flex-col justify-center space-y-6 text-left md:text-left">
          <motion.h2
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-bold mb-10"
          >
            <span className="font-montserrat text-white text-3xl md:text-4xl">Have an Idea?</span> <br />
            <span className="font-orbitron text-[#47C5E5] text-4xl md:text-5xl">Let’s Connect !!!</span>
          </motion.h2>

          {/* Contact Items with staggered fade-in + slide-up */}
          <motion.div
            className="flex flex-col gap-5"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {contactItems.map((itemData, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-3 text-left md:justify-start"
                variants={item}
              >
                <img src={itemData.icon} alt={`icon-${idx}`} className="w-5 h-5 sm:w-6 sm:h-6" />
                {itemData.href ? (
                  itemData.text.includes("mailto:") || itemData.text.includes("tel:") ? (
                    <a
                      href={itemData.href}
                      className="font-montserrat text-sm md:text-xl cursor-pointer md:hover:underline md:hover:text-[#47C5E5]"
                    >
                      {itemData.text.replace(/mailto:|tel:/, "")}
                    </a>
                  ) : (
                    <a
                      href={itemData.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-montserrat text-sm md:text-xl cursor-pointer md:hover:underline md:hover:text-[#47C5E5]"
                    >
                      {itemData.text}
                    </a>
                  )
                ) : (
                  <span className="font-montserrat text-sm md:text-xl">{itemData.text}</span>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT COLUMN - Contact Form */}
        <motion.div
          className="bg-[#E6E6E6] text-[#12325B] rounded-3xl p-4 md:p-6 shadow-xl flex flex-col w-full max-w-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={formVariant}
          animate={window.innerWidth < 768 ? { opacity: 1 } : undefined}
        >
          <h3 className="font-montserrat text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
            Send a Message
          </h3>
          <form className="flex flex-col gap-3 flex-1" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#47C5E5] placeholder-gray-500 text-sm sm:text-base shadow-sm transition duration-300"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#47C5E5] placeholder-gray-500 text-sm sm:text-base shadow-sm transition duration-300"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#47C5E5] placeholder-gray-500 text-sm sm:text-base shadow-sm transition duration-300 resize-none"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-gradient-to-r from-[#47C5E5] to-[#3DB4D7] text-[#12325B] py-3 rounded-xl font-montserrat font-bold hover:from-[#3DB4D7] hover:to-[#47C5E5] transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Send 
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
