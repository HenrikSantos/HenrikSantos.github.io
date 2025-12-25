export const transitions = {
  spring: {
    type: "spring",
    damping: 20,
    stiffness: 100,
  } as const,
  smooth: {
    type: "tween",
    ease: [0.25, 0.1, 0.25, 1],
    duration: 0.6,
  } as const,
};

export const variants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  modal: {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, y: 20 },
  },
  staggerContainer: {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
};

// Helper for generating variants with custom direction
export const getDirectionVariant = (
  direction: "up" | "down" | "left" | "right",
  distance = 50,
) => {
  const axis = direction === "left" || direction === "right" ? "x" : "y";

  return {
    hidden: {
      opacity: 0,
      [axis]:
        direction === "left"
          ? -distance
          : direction === "right"
            ? distance
            : direction === "up"
              ? distance
              : -distance,
    },
    visible: {
      opacity: 1,
      [axis]: 0,
    },
  };
};
