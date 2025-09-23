import React, { useState, useEffect } from "react";
import { FiSend } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
  });

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, subject } = formData;
    const phoneNumber = "917339470506"; // include country code

    const message = `Hello, I am ${name}, ${subject}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="py-14 px-6 lg:px-0 overflow-hidden">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center text-white mb-16" data-aos="fade-up">
        <span style={{ fontFamily: "'Dancing Script', cursive" }}>Let’s Connect</span>
      </h2>

      {/* Form */}
      <div className="max-w-2xl mx-auto">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900/80 border border-zinc-400 rounded-2xl py-10 px-6 space-y-10"
          data-aos="fade-up" // form card animation
          data-aos-delay="50"
          data-aos-duration="800">
          {/* Name */}
          <div className="relative" data-aos="fade-right" data-aos-delay="100">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="peer w-full border-b border-zinc-600 bg-transparent text-white placeholder-transparent focus:outline-none focus:border-white text-lg py-3 mt-5"
              placeholder="Your Name"
            />
            <label className="absolute left-0 top-0 text-gray-200 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 peer-focus:top-0 peer-focus:text-sm peer-focus:text-white">
              Your Name
            </label>
          </div>

          {/* Message */}
          <div className="relative" data-aos="fade-left" data-aos-delay="200">
            <textarea
              name="subject"
              rows="3"
              value={formData.subject}
              onChange={handleChange}
              required
              className="peer w-full border-b border-zinc-600 bg-transparent text-white placeholder-transparent focus:outline-none focus:border-white text-lg py-3 mt-5"
              placeholder="Your Message"
            />
            <label className="absolute left-0 top-0 text-gray-200 text-sm pointer-events-none transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-100 peer-focus:top-0 peer-focus:text-sm peer-focus:text-white">
              Your Message
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center" data-aos="zoom-in" data-aos-delay="300">
            <button
              type="submit"
              className="cursor-pointer flex items-center justify-center gap-2 p-3 rounded-lg border border-white text-white font-semibold tracking-wide hover:bg-white hover:text-black transition">
              <FiSend className="text-xl" />
              Send on WhatsApp
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;