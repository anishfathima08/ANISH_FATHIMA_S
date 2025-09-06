import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiExpress, SiMongodb } from "react-icons/si";

const skills = [
  { icon: <FaHtml5 className="text-orange-500 text-5xl" />, name: "HTML", border: "border-orange-500" },
  { icon: <FaCss3Alt className="text-blue-500 text-5xl" />, name: "CSS", border: "border-blue-500" },
  { icon: <FaBootstrap className="text-purple-600 text-5xl" />, name: "Bootstrap", border: "border-purple-600" },
  { icon: <SiTailwindcss className="text-cyan-400 text-5xl" />, name: "Tailwind CSS", border: "border-cyan-400" },
  { icon: <FaJs className="text-yellow-400 text-5xl" />, name: "JavaScript", border: "border-yellow-400" },
  { icon: <SiJquery className="text-blue-400 text-5xl" />, name: "jQuery", border: "border-blue-400" },
  { icon: <FaReact className="text-cyan-400 text-5xl" />, name: "React JS", border: "border-cyan-400" },
  { icon: <FaNodeJs className="text-green-500 text-5xl" />, name: "Node JS", border: "border-green-500" },
  { icon: <SiExpress className="text-gray-400 text-5xl" />, name: "Express JS", border: "border-gray-400" },
  { icon: <SiMongodb className="text-green-600 text-5xl" />, name: "MongoDB", border: "border-green-600" },
];

const Skill = () => {
  return (
    <section id="skills" className="lg:px-15 px-5 py-16 bg-red-800">
      <h1 className="text-5xl font-bold text-center text-white mb-12">
        <span className="bg-cyan-400 bg-clip-text text-transparent" style={{ fontFamily: "'Dancing Script', cursive" }}>Tech Stack</span>
      </h1>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
        grabCursor={true}
        breakpoints={{
          320: { slidesPerView: 2, spaceBetween: 20 },
          640: { slidesPerView: 3, spaceBetween: 25 },
          1024: { slidesPerView: 4, spaceBetween: 30 },
        }}
        className="p-8"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col items-center justify-center lg:h-32 lg:w-40 rounded-lg border ${skill.border} shadow-lg text-white transition-transform duration-300 hover:scale-110 lg:mt-10 lg:mb-5 py-5`}
            >
              {skill.icon}
              <p className="mt-2 text-sm font-semibold">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Skill;