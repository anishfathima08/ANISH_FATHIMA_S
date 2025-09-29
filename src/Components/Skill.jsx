import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { myContext } from "../Context/ContextProvider";

const Skill = () => {
  const { skills } = useContext(myContext);

  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-14 px-4 lg:px-0 overflow-y-hidden"
    >
      {/* Heading */}
      <h1
        className="text-5xl font-bold text-center text-white mb-10"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <span
          className="text-white"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Tech Stack
        </span>
      </h1>

      {/* Swiper */}
      <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        data-aos-duration="1200"
      >
        <Swiper
          modules={[Autoplay]}
          spaceBetween={28}
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
                className={`flex flex-col items-center justify-center lg:h-32 lg:w-40 rounded-lg border ${skill.border} shadow-lg text-white transition-transform duration-300 hover:scale-120 my-5 lg:py-0 py-7 md:py-8 mx-auto`}
              >
                {skill.icon}
                <p className="mt-2 text-sm font-semibold">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Skill;