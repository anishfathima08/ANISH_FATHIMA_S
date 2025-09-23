import React, { useContext } from "react";
import { Briefcase } from "lucide-react";
import { myContext } from "../Context/ContextProvider";

const Experience = () => {
  const { experiences } = useContext(myContext);

  return (
    <section id="experience" className="py-14 px-4 lg:px-0 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          className="text-5xl font-bold text-center mb-14"
          data-aos="fade-down"
          data-aos-duration="1200"
        >
          <span
            className="text-white"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Experience
          </span>
        </h2>

        {/* Timeline */}
        <div
          className="relative border-l border-gray-700 mx-auto max-w-2xl"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {/* Icon */}
          <span className="absolute flex items-center justify-center w-10 h-10 text-black bg-white rounded-full -left-5 ring-4 ring-black">
            <Briefcase className="text-black w-5 h-5" />
          </span>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="ml-6 group relative"
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
              data-aos-duration="1200"
            >
              {/* Card */}
              <div className="mx-auto max-w-xl p-6 bg-zinc-900 border border-zinc-400 rounded-2xl transform transition-transform duration-300 group-hover:-translate-y-2">
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
