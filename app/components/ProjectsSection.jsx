"use client";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Portfolio Website",
      description: "Built with Next.js & Tailwind CSS.",
      live: "https://your-portfolio-link.com",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      name: "Twitter Clone",
      description: "MERN Stack + Tailwind CSS.",
      live: "https://your-twitter-clone-link.com",
      github: "https://github.com/yourusername/twitter-clone",
    },
    {
      name: "Weather App",
      description: "Real-time weather updates.",
      live: "https://your-weather-app-link.com",
      github: "https://github.com/yourusername/weather-app",
    },
    {
      name: "Todo App",
      description: "React Hooks + Local Storage.",
      live: "https://your-todo-app-link.com",
      github: "https://github.com/yourusername/todo-app",
    },
  ];

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
      id="projects"
      className="min-h-[87vh] relative flex items-center justify-center px-4 sm:px-6 md:px-10 bg-cover   "
      style={{ backgroundImage: "url('')" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <div className="w-full mx-auto max-w-[1450px] bg-gray-400/10 backdrop-blur-sm p-10 sm:p-8 md:p-16 md:top-4  top-3 relative rounded-[10px] text-center shadow-inner shadow-blue-400">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-black">
          🚀 My Projects
        </h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col justify-between p-6 rounded-xl bg-white/30 hover:bg-white/50 transition shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-black mb-2">
                  {project.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-800 mb-4">
                  {project.description}
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 mt-4">
                {/* Glassmorphism Buttons */}
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/30 border border-white/40 backdrop-blur-md hover:bg-white/50 text-blue-700 font-semibold flex items-center gap-2 transition"
                >
                  Live Demo <FaExternalLinkAlt size={14} />
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg bg-white/30 border border-white/40 backdrop-blur-md hover:bg-white/50 text-gray-900 font-semibold flex items-center gap-2 transition"
                >
                  GitHub <FaGithub size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
