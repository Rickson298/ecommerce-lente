import { MotionProps, Variants } from "framer-motion";

export const MainLayoutAnimations: MotionProps = {
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  animate: { opacity: 1 },
};

export const containerItemsVariants: Variants = {
  hidden: {
    transition: { staggerChildren: 1, delayChildren: 0.8 },
  },
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

export const imgAnimation: MotionProps = {
  initial: { opacity: 0 },
  exit: { opacity: 0 },
  animate: { opacity: 1 },
};
