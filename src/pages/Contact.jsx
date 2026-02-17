import React, { useState } from "react";
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

  return (
    <section className="bg-[#12325B] text-[#EAF4FF] flex justify-center px-6 md:px-20 py-10">
      <div className="max-w-[1000px] w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

        {/* LEFT COLUMN - Contact Info */}
        <div className="flex flex-col justify-center space-y-6 text-left md:text-left">
          <h2 className="font-bold font-dmsans mb-4">
            <span className="text-white text-3xl md:text-4xl">Have an Idea?</span> <br />
            <span className="text-[#47C5E5] text-4xl md:text-5xl">Let’s Connect !!!</span>
          </h2>

          {/* Contact Items */}
          <div className="flex flex-col gap-5">
            {[ 
              { icon: c1, text: "contact.harshitonmail@gmail.com" },
              { icon: c2, text: "linkedin.com/in/harshit" },
              { icon: c3, text: "github.com/harshit" },
              { icon: c4, text: "Noida, U.P." },
              { icon: c5, text: "91- 9548484695" },
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-left md:justify-start">
                <img src={item.icon} alt={`icon-${idx}`} className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="text-sm md:text-xl cursor-pointer md:hover:underline md:hover:text-[#47C5E5]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Contact Form */}
        <div className="bg-[#E6E6E6] text-[#12325B] rounded-3xl p-4 md:p-6 shadow-xl flex flex-col w-full max-w-md">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center md:text-left">
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
              className="mt-2 bg-gradient-to-r from-[#47C5E5] to-[#3DB4D7] text-[#12325B] py-3 rounded-xl font-semibold hover:from-[#3DB4D7] hover:to-[#47C5E5] transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
