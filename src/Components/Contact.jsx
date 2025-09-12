import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    subject: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, number, subject } = formData;

    // Replace with your WhatsApp number in international format
    const phoneNumber = "7339470506"; // Example: India +91

    const message = `Hello, I am ${name}.
    Phone: ${number}
    Subject: ${subject}`;

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="bg-black py-16">
      <h2 className="text-5xl font-bold text-center text-white mb-12">
        <span
          className="bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Contact Me
        </span>
      </h2>

      <div className="max-w-2xl mx-auto px-6">
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-900 p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />

          {/* Number */}
          <input
            type="tel"
            name="number"
            placeholder="Your Phone Number"
            value={formData.number}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />

          {/* Subject */}
          <textarea
            name="subject"
            placeholder="Your Message / Subject"
            rows="4"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white font-semibold hover:opacity-90 transition"
          >
            Send on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;