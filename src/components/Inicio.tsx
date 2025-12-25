import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import TypewriterText from "./TypewriterText";
import { variants, transitions } from "../utils/animations";

export default function Inicio() {
  return (
    <section
      className="relative flex min-h-[90vh] flex-col items-center justify-center py-20"
      id="inicio"
    >
      <ParticlesBackground />

      <motion.div
        variants={variants.fadeInUp}
        initial="hidden"
        animate="visible"
        transition={{ ...transitions.smooth, duration: 0.8 }}
        className="-mt-32 text-center"
      >
        <motion.h1
          className="text-5xl font-thin md:text-6xl"
          variants={variants.fadeIn}
          transition={{ delay: 0.2 }}
        >
          BEM-VINDO AO MEU
        </motion.h1>

        <motion.h1
          className="neon-text mx-auto my-4 text-center text-6xl font-medium italic underline md:text-8xl"
          variants={variants.scaleIn}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <TypewriterText text="PORTFÓLIO" delay={800} speed={120} />
        </motion.h1>
      </motion.div>

      <motion.div
        className="absolute inset-x-0 bottom-10 flex justify-center"
        initial={{ opacity: 1 }}
        animate={{ y: [0, 8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "easeInOut",
        }}
        style={{ willChange: "transform" }}
      >
        <svg
          className="h-16 w-16 text-[var(--emphasis)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </motion.div>
    </section>
  );
}
