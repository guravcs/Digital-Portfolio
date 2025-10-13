"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function ContactSection() {
  const router = useRouter();

  // Animation variants (same as SkillsSection / ProjectsSection)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="contact"
      className="  min-h-[90vh]  relative md:top-6 top-6  px-4 sm:px-6 md:px-10 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: "url('')" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: false }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        className="w-full min-h-[87vh] mx-auto max-w-[1450px] flex flex-col items-center justify-center bg-gray-400/10 backdrop-blur-sm p-6 sm:p-8 md:p-10 rounded-[10px] text-center shadow-inner shadow-blue-400"
      >
        <motion.h2
          variants={item}
          className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-black"
        >
          📬 Contact Me
        </motion.h2>

        <motion.p
          variants={item}
          className="text-base sm:text-lg text-center mb-6 max-w-xl mx-auto text-black"
        >
          Got a project or idea? Reach out to me and I’ll get back to you ASAP!
        </motion.p>

        <motion.button
          variants={item}
          onClick={() => router.push("/contact-form")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 rounded-lg bg-white/30 border border-white/40 backdrop-blur-md hover:bg-white/50 text-blue-700 font-semibold shadow-md transition"
        >
          Send a Message
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
