
import React, { useState } from "react";
import { certificates } from "../assets/assets";

const Certificate = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certificates" className="bg-black py-16">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center text-white mb-12">
        <span
          className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Certificates
        </span>
      </h2>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="group cursor-pointer relative"
            onClick={() => setSelected(cert)}
          >
            {/* Image */}
            <img
              src={cert.img}
              alt={cert.title}
              className="w-full h-64 object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
            />

            {/* Caption (floating bottom) */}
            <div className="absolute bottom-2 left-2 bg-black/60 px-3 py-1 rounded-lg">
              <h3 className="text-sm font-semibold text-white">
                {cert.title}
              </h3>
              <p className="text-xs text-zinc-300">{cert.provider}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-3xl w-full px-4">
            <img
              src={selected.img}
              alt={selected.title}
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="text-lg font-semibold">{selected.title}</h3>
              <p className="text-sm text-zinc-300">{selected.provider}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificate;
