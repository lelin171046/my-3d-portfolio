"use client";
import React from "react";
import { motion } from "framer-motion";
import astronautImg from "../assets/images/contact.jpg"; // Replace with your own image


const Contact = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b z-10 from-[#0a0a0f] to-[#121225] text-white flex flex-col items-center justify-center px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-2">
          Get in <span className="text-purple-500">touch</span>
        </h1>
        <p className="text-gray-400">
          Reach out, and let’s create a universe of possibilities together!
        </p>
      </motion.div>

      {/* Contact Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-[#181829] rounded-2xl shadow-2xl max-w-5xl w-full grid md:grid-cols-2 overflow-hidden"
      >
        {/* Left Form */}
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4 text-white">
            Let’s connect constellations
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s align our constellations! Reach out and let the magic of
            collaboration illuminate our skies.
          </p>

          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Last Name"
                className="bg-[#0f0f1a] text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="First Name"
                className="bg-[#0f0f1a] text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#0f0f1a] text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[#0f0f1a] text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full bg-[#0f0f1a] text-gray-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
            ></textarea>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 font-medium hover:from-purple-700 hover:to-indigo-600 transition flex items-center justify-center gap-2"
            >
              Send to the moon 🚀
            </motion.button>
          </form>
        </div>

        {/* Right Image Section */}
        <div className="relative overflow-hidden">
          <img
            src={astronautImg}
            alt="Astronaut"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent"></div>
          <p className="absolute bottom-6 left-6 text-gray-300 italic text-sm max-w-xs">
            “Two lunar months revealed Earth’s fragile beauty against vast
            silence, transforming my view of our place in the universe.”
            <br />— Irinei Trasta
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
