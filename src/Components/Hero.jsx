import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaLinkedin, FaGithub } from "react-icons/fa";
import Particles from "react-tsparticles";
import { myContext } from "../Context/ContextProvider";

const Hero = () => {
  
  const { particlesInit } = useContext(myContext);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-6 lg:mt-10"
    >
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 -z-10"
        options={{
          background: { color: "transparent" },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: { enable: true, speed: 2 },
            number: { value: 60, density: { enable: true, area: 800 } },
            opacity: { value: 0.3 },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* Hero Content */}
      <div className="max-w-3xl">
        {/* Static Name */}
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
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

        {/* Quote */}
        <div className="mt-6 space-y-2 text-lg md:text-xl text-zinc-400">
          <p>"Turning ideas into reality."</p>
          <p>"Building smooth and interactive web experiences."</p>
          <p>"Passionate about clean, modern UI & scalable solutions."</p>
        </div>

        {/* Social Icons */}
        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://www.linkedin.com/in/anishfathima/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-zinc-300 transition-transform duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/anishfathima08"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl text-zinc-300 transition-transform duration-300 hover:scale-125 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
          >
            <FaGithub />
          </a>
        </div>

        {/* Download Button */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="/AnishFathimaResume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl text-white bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-500 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_12px_rgba(255,255,255,0.7)]"
          >
            <FaDownload /> Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;