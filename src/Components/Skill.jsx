import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { myContext } from "../Context/ContextProvider";

const Skill = () => {

  const { skills } = useContext(myContext)

  return (
    <section id="skills" className="lg:px-15 py-4 lg:mx-0 mx-5">
      <h1 className="text-5xl font-bold text-center text-white mb-10">
        <span className="text-white" style={{ fontFamily: "'Dancing Script', cursive" }}>Tech Stack</span>
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
          1024: { slidesPerView: 5, spaceBetween: 30 },
        }}
        className="p-8"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div
              className={`flex flex-col items-center justify-center lg:h-32 lg:w-40 rounded-lg border ${skill.border} shadow-lg text-white transition-transform duration-300 hover:scale-120 my-5 lg:py-0 py-3 md:py-8`}
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