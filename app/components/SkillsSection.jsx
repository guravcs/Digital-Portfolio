"use client";
import { motion } from "framer-motion";
import { FaReact, FaNode, FaYoutube } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiCanva,
} from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { name: "React.js", icon: <FaReact size={40} color="#61DBFB" /> },
    { name: "Next.js", icon: <SiNextdotjs size={40} color="black" /> },
    { name: "Node.js", icon: <FaNode size={40} color="green" /> },
    { name: "Express.js", icon: <SiExpress size={40} color="gray" /> },
    { name: "MongoDB", icon: <SiMongodb size={40} color="green" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#38BDF8" /> },
    { name: "YouTube", icon: <FaYoutube size={40} color="red" /> },
    { name: "CapCut Pro", icon: <span className="text-4xl">🎬</span> },
    { name: "Canva", icon: <SiCanva size={40} color="#00C4CC" /> },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.6, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="skills"
      className="min-h-[88vh] relative md:top-1   flex items-center justify-center px-4 sm:px-6 md:px-10 "
      style={{ backgroundImage: "url('')" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <div className="w-full mx-auto max-w-[1450px] bg-gray-400/10 backdrop-blur-sm p-16 sm:p-8 md:p-10 rounded-[10px] text-center shadow-inner shadow-blue-400">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-black">
          💡 My Skills
        </h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center justify-center p-6 sm:p-6 rounded-xl bg-white/30 hover:bg-white/50 transition shadow-md"
              whileHover={{ scale: 1.1 }}
            >
              {skill.icon}
              <p className="mt-2 sm:mt-3 text-base sm:text-lg font-semibold text-black">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
