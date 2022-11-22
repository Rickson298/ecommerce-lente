import { Variants } from "framer-motion";

export const listItemVariant: Variants = {
  hidden: { y: 50, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 60 } },
};
