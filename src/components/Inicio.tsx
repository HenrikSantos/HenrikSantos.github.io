import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";
import TypewriterText from "./TypewriterText";

export default function Inicio() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center py-20" id="inicio">
      <ParticlesBackground />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="-mt-32 text-center"
      >
        <motion.h1
          className="text-5xl font-thin md:text-6xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          BEM-VINDO AO MEU
        </motion.h1>

        <motion.h1
          className="neon-text mx-auto my-4 text-center text-6xl font-medium italic underline md:text-8xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <TypewriterText text="PORTFÓLIO" delay={800} speed={120} />
        </motion.h1>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        <svg
          className="h-8 w-8 text-[var(--emphasis)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
