import { MotionProps } from "framer-motion";

export const linkAnimation: MotionProps = {
  initial: { scale: 0.4, opacity: 0 },
  exit: { scale: 0.4, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
};
