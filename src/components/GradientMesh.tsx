import { motion } from "framer-motion";

export default function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-r from-[var(--emphasis)]/20 to-cyan-500/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-l from-blue-500/20 to-purple-500/20 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 left-1/3 h-[400px] w-[400px] rounded-full bg-gradient-to-t from-emerald-500/15 to-teal-500/15 blur-3xl"
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
