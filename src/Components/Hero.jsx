import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaLinkedin, FaGithub, FaEnvelope, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center text-center pt-30 lg:pt-35 pb-14"
    >
      {/* Hero Content */}
      <div className="max-w-3xl space-y-10">
        {/* Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          <span style={{ fontFamily: "'Dancing Script', cursive" }}>
            Hi, I'm Anis Fathima
          </span>
        </h1>

        {/* Typing Profession */}
        <h2 className="mt-2 text-2xl md:text-4xl font-semibold text-zinc-300">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1500,
              "Frontend Developer",
              1500,
              "React Enthusiast",
              1500,
              "Backend Developer",
              1500,
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        {/* Tagline */}
        <div className="mt-6 text-lg md:text-xl text-zinc-400 italic space-y-1">
          <p>"Turning ideas into reality."</p>
          <p>"Crafting smooth and scalable web experiences."</p>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="mailto:anisfathima324@gmail.com"
            className="text-3xl text-zinc-400 hover:text-white transition-transform duration-300 hover:scale-120"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://www.linkedin.com/in/anishfathima/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-zinc-400 hover:text-white transition-transform duration-300 hover:scale-120"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/anishfathima08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-zinc-400 hover:text-white transition-transform duration-300 hover:scale-120"
          >
            <FaGithub />
          </a>
        </div>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          {/* Resume Button */}
          <a
            href="/AnisFathimaResume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            <FaDownload /> Download Resume
          </a>

          {/* WhatsApp Button */}
          <a
            href="https://wa.me/917339470506"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            <FaWhatsapp /> Drop a Message
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
