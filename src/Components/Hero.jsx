import React, { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaLinkedin } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { myContext } from "../Context/ContextProvider";

const Hero = () => {
  
  const { particlesInit } = useContext(myContext)

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-center px-6"
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
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Anis Fathima
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
            ]}
            speed={50}
            repeat={Infinity}
          />
        </h2>

        {/* Quote */}
        <p className="mt-4 text-lg md:text-xl text-zinc-400">
          "Turning ideas into smooth and interactive web experiences."
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            href="/AnishFathimaResume.pdf"
            download
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-md hover:shadow-lg hover:opacity-90 transition"
          >
            <FaDownload /> Download CV
          </a>

          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
