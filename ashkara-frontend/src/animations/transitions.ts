import type { Variants } from "framer-motion";

export const motionTimings = {
  fast: 0.18,
  base: 0.32,
  slow: 0.64,
  ease: [0.22, 1, 0.36, 1] as const,
};

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: motionTimings.slow,
      ease: motionTimings.ease,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};
