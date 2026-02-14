"use client";
import { motion } from "framer-motion";

export default function HomeSection() {
  return (
    <motion.section
      id="home"
      className="bg-cover bg-center bg-fixed flex items-center justify-center px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: "url('')" }}
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      {/* Wrapper */}
      <div className="w-full max-w-[1450px] md:min-h-[87vh] min-h-[87vh] flex flex-col md:flex-row items-center justify-center bg-gray-400/10 backdrop-blur-sm p-6 md:p-10 rounded-[10px] relative top-[10px] md:top-20 sm:top-[80px] shadow-inner shadow-blue-400 md:space-x-60 space-y-1 md:space-y-0">
        
        {/* Left Side - Text */}
        <div className="text-center md:text-left mb-4 md:mb-0 md:pr-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4 leading-tight">
            Hi, I’m <span className="text-blue-600">Gaurav Agrawal</span> 👋
          </h1>

          {/* Roles Animation */}
          <motion.p
            className="text-lg sm:text-xl font-semibold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            MERN Developer | Content Creator | Video Editor 
          </motion.p>

          <p className="text-base sm:text-lg text-black max-w-md mx-auto md:mx-0 mb-6">
            I design and build modern web apps, create engaging YouTube content,
            and bring stories to life through video editing and cinematography.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-center"
            >
              🚀 View My Work
            </a>
            <a
              href="https://www.youtube.com/@GauravFinn"
              target="_blank"
              className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-700 transition text-center"
            >
              ▶ Watch on YouTube
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="flex-shrink-0 flex justify-center md:justify-end w-full md:w-auto">
          <img
            className="rounded-[10px] shadow-lg border-4 border-white object-cover w-[240px] sm:w-[270px] md:w-[300px]"
            src="/images/gaurav.jpg"
            alt="Profile"
          />
        </div>
      </div>
    </motion.section>
  );
}
