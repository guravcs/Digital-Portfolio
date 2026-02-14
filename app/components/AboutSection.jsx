"use client";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: "url('/')" }}
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <div className="relative md:top-[46px] sm:top-18 bottom-6 w-full flex flex-col mx-auto max-w-[1450px] min-h-[88vh] items-center justify-center text-black rounded-[10px] bg-gray-400/10 backdrop-blur-sm gap-6 shadow-inner shadow-blue-400 p-4 sm:p-6 md:p-10 ">
        
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold py-6 sm:py-10 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          🙋‍♂️ About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          className="text-base sm:text-lg md:text-xl text-center md:text-left max-w-4xl leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Hi, I’m <span className="font-semibold">Gaurav Agrawal</span>, a passionate 
          <span className="font-semibold"> MERN Stack Developer</span> and 
          <span className="font-semibold"> Content Creator</span> from Baran, Rajasthan, currently living in Kota.
        </motion.p>

        {/* Bullet Points */}
        <motion.ul
          className="list-disc text-base sm:text-lg md:text-xl text-left sm:text-center md:text-left max-w-5xl space-y-4 sm:space-y-5 md:space-y-6 mx-6 sm:mx-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <li>💻 Built projects like <b>Twitter Clone with Tailwind CSS</b>, Portfolio Website, Weather App & Todo App.</li>
          <li>🎓 Doing a <b>6-week AICTE + IBM SkillsBuild Internship</b> on real-world projects.</li>
          <li>📸 Content creation, video editing (CapCut), and shooting enthusiast.</li>
          <li>🎯 Future Goal: Grow as a <b>Content Creator</b> while continuing as a <b>Web Developer</b>.</li>
        </motion.ul>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          download
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          📄 Download Resume
        </motion.a>
      </div>
    </motion.section>
  );
}
