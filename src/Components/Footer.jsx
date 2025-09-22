import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 border-t border-zinc-800 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left - Brand */}
        <div className="text-center md:text-left">
          <h3
            className="text-xl font-semibold text-white"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Anish Fathima
          </h3>
          <p className="text-sm text-gray-400">MERN Stack Developer</p>
        </div>

        {/* Right - Social & Contact */}
        <div className="flex gap-5 text-xl">
          {/* Mail */}
          <a
            href="mailto:anisfathima324@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/anishfathima08"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/anishfathima/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>

        </div>
      </div>

      {/* Bottom Note */}
      <div className="text-center text-xs text-gray-400 mt-6">
        Designed & Developed by{" "}
        <a href='mailto:anisfathima324@gmail.com' className="text-white font-medium">Anish Fathima 🤍</a>
      </div>
    </footer>
  );
};

export default Footer;
