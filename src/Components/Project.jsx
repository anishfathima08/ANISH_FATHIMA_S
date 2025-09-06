import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projects } from "../assets/assets";


const Project = () => {
  return (
    <section id="projects" className="bg-black py-16">
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        <span className="bg-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: "'Dancing Script', cursive" }}>Projects</span>
      </h2>

      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group bg-zinc-900 rounded-2xl overflow-hidden shadow-lg transition hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-52 object-cover"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-fuchsia-400 transition"
              >
                <FaGithub />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-3xl hover:text-cyan-400 transition"
              >
                <FaExternalLinkAlt />
              </a>
            </div>

            {/* Content */}
            <div className="p-5 text-white">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-sm text-zinc-400 mt-2">{project.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs rounded-lg bg-zinc-800 border border-zinc-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;