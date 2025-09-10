import React from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const Education = () => {
  const education = [
    {
      period: "June 2021 - May 2024",
      title: "Bachelor of Computer Application ( BCA )",
      institution: "Aiman College of Arts and Science for Women, Trichy",
      details: "CGPA - 8.9 | Percentage - 89%",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
    },
    {
      period: "June 2024 - December 2024",
      title: "MERN Stack Course",
      institution: "ILife Academy",
      details: "Full Stack Development specialization with real-time projects",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section id="education" className="py-16 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-12">
          <span className="bg-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: "'Dancing Script', cursive" }}>Education</span>
        </h2>

        {/* Large Screen Timeline */}
        <div className="hidden lg:block relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-zinc-700 -translate-x-1/2"></div>

          {education.map((edu, index) => (
            <div key={index} className={`mb-12 flex w-full ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
              {/* Card */}
              <div
                className={`relative w-[calc(50%-2rem)] p-6 rounded-2xl bg-zinc-900/80 backdrop-blur-md border border-zinc-800 hover:-translate-y-1 transition-transform duration-300`}>
                <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                <p className="text-sm text-zinc-400">{edu.institution}</p>
                <p className="mt-2 text-fuchsia-400 font-medium">{edu.period}</p>
                <p className="mt-3 text-zinc-300 text-sm">{edu.details}</p>
              </div>

              {/* Icon */}
              <span className="absolute left-1/2 -translate-x-1/2 w-12 h-12 flex items-center justify-center bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full ring-4 ring-black">
                {edu.icon}
              </span>
            </div>
          ))}
        </div>

        {/* Mobile Timeline */}

        <div className="lg:hidden relative border-l border-gray-700">
          {education.map((edu, index) => (
            <div key={index} className="mb-10 ml-6 group">
              {/* Icon */}
              <span className="absolute flex items-center justify-center w-10 h-10 bg-gradient-to-r from-fuchsia-500 to-indigo-500 rounded-full -left-5 ring-4 ring-black">{edu.icon}</span>

              {/* Card */}
              <div className="p-6 bg-zinc-900 rounded-2xl transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                <p className="text-lg text-zinc-400">{edu.institution}</p>
                <p className="mt-2 text-fuchsia-400 font-medium">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;