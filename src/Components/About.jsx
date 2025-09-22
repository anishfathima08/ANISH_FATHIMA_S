import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section id="about" className="py-14 px-4 lg:px-0">
      <h2 className="xl:text-5xl md:text-5xl text-4xl font-bold text-center mb-6 text-white">
        <span style={{ fontFamily: "'Dancing Script', cursive" }}>About Me</span>
      </h2>

      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_2fr] gap-5 items-center">
       
        <div className="flex justify-center">
          <img src={assets.AboutImg} alt="About me" className="rounded-2xl shadow-lg object-cover w-[220px] h-[280px] md:w-[250px] md:h-[320px]" />
        </div>

        <div className="bg-zinc-900 border border-zinc-400 rounded-2xl p-6 shadow-lg">
          <p className="text-zinc-300 leading-relaxed mb-4">
            I’m <span className="font-semibold text-white">Anish Fathima</span>, a <span className="font-semibold text-white">MERN Stack Developer & Trainer</span> with <span className="font-semibold text-white">10 months of experience</span> in building and teaching modern web applications.
          </p>

          <p className="text-zinc-300 leading-relaxed mb-4">
            At <span className="font-semibold text-white">ILife Technologies</span>, I contributed to <span className="font-semibold text-white">live projects</span> with a strong focus on <span className="font-semibold text-white">frontend development</span>, while also guiding students in mastering MERN stack technologies.
          </p>

          <p className="text-zinc-300 leading-relaxed">
            I have built several <span className="font-semibold text-white">full-stack applications</span>, focusing on clean design, scalability, and performance. Passionate about <span className="font-semibold text-white">UI/UX</span> and modern web technologies, I enjoy creating impactful digital solutions and sharing knowledge.
          </p>
        </div>

      </div>
    </section>
  );
};

export default About;