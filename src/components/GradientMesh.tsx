import { motion } from "framer-motion";

export default function GradientMesh() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-20 overflow-hidden">
      <motion.div
        className="from-[var(--emphasis)]/15 absolute -left-1/4 -top-1/4 size-[400px] rounded-full bg-gradient-to-r to-cyan-500/15 blur-2xl"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -right-1/4 top-1/4 size-[350px] rounded-full bg-gradient-to-l from-blue-500/15 to-purple-500/15 blur-2xl"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-1/4 left-1/3 size-[300px] rounded-full bg-gradient-to-t from-emerald-500/10 to-teal-500/10 blur-2xl"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
        animate={{
          x: [0, 60, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
