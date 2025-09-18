import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <section id="about" className="py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        <div className="flex justify-center">
          <img
            src={assets.AboutImg} // replace with your image
            alt="About me"
            className="rounded-2xl shadow-lg border border-zinc-700 object-cover w-full h-full max-h-[400px]"
          />
        </div>
        
        {/* Text Section */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-2xl p-8 shadow-lg">
          <h2 className="text-5xl font-bold text-center mb-8 text-white">
            <span style={{ fontFamily: "'Dancing Script', cursive" }}>
              About Me
            </span>
          </h2>
          <p className="text-zinc-300 leading-relaxed mb-4">
            I’m <span className="font-semibold text-white">Anis Fathima</span>, 
            a passionate full-stack developer who loves creating interactive and 
            responsive web experiences.
          </p>
          <p className="text-zinc-300 leading-relaxed mb-4">
            I specialize in <span className="font-semibold text-white">React, Node.js, MongoDB</span>, 
            and enjoy designing UI/UX with Tailwind CSS and Bootstrap. 
            I focus on clean, elegant, and functional designs.
          </p>
          <p className="text-zinc-300 leading-relaxed">
            When I’m not coding, I enjoy exploring new technologies, 
            learning advanced development skills, and contributing 
            to innovative projects.
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default About;
