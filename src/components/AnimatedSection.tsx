import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { transitions, getDirectionVariant } from "../utils/animations";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  // Allow overriding variants entirely if needed
  variants?: Variants;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  variants,
}: AnimatedSectionProps) {
  // Use provided variants or generate default directional ones
  const animationVariants = variants || getDirectionVariant(direction);

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={animationVariants}
      transition={{
        ...transitions.smooth,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
