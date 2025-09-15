import React, { useContext } from "react";
import { Briefcase } from "lucide-react";
import { myContext } from "../Context/ContextProvider";

const Experience = () => {

  const { experiences } = useContext(myContext)

  return (
    <section id="experience" className="py-4">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-5xl font-bold text-center mb-13">
          <span className="text-white" style={{ fontFamily: "'Dancing Script', cursive" }}>
            Experience
          </span>
        </h2>

        {/* Timeline */}
        <div className="relative border-l border-gray-700">
          {experiences.map((exp, index) => (
            <div key={index} className="ml-6 group">
              {/* Icon */}
              <span className="absolute flex items-center justify-center w-10 h-10 text-black bg-white rounded-full -left-5 ring-4 ring-black">
                <Briefcase className="text-black w-5 h-5" />
              </span>

              {/* Card */}
              <div className="p-6 bg-zinc-900 rounded-2xl transform transition-transform duration-300 group-hover:-translate-y-2">
                <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                <p className="text-lg text-zinc-400">{exp.company}</p>
                <p className="mt-2 text-white font-medium">{exp.period}</p>
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