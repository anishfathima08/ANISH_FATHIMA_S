import React from "react";
import { Briefcase } from "lucide-react";

const Experience = () => {

  const experiences = [
    {
      period: "Feb 2025 - Present",
      role: "MERN Stack Trainer & Developer",
      company: "ILife Technologies",
      responsibilities: [
        "Conducted internships, workshops, and MERN stack courses.",
        "Trained 300+ students with hands-on projects and guidance.",
        "Delivered structured classes on frontend and backend development.",
        "Contributed to in-house development projects and scalable applications.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-10 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="bg-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Experience
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-6 group">
              {/* Icon */}
              <span className="absolute flex items-center justify-center w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full -left-5 ring-4 ring-black">
                <Briefcase className="text-white w-5 h-5" />
              </span>

              {/* Card */}
              <div className="p-6 bg-zinc-900 rounded-2xl transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-lg text-zinc-400">{exp.company}</p>
                <p className="mt-2 text-fuchsia-400 font-medium">{exp.period}</p>
                <ul className="mt-3 space-y-2 text-zinc-300 text-sm leading-relaxed list-disc list-inside">
                  {exp.responsibilities.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;