import { CardLens } from "@components/card-lens";
import { products } from "@shared/constants/products";
import { motion, AnimatePresence } from "framer-motion";
import {
  containerItemsVariants,
  imgAnimation,
  MainLayoutAnimations,
} from "./animations";
import { ContainerMainLayout } from "./styles";

export default function MainLayout() {
  return (
    <ContainerMainLayout>
      <motion.img src="images/black-friday.webp" {...imgAnimation} />
      <motion.div
        className="cards"
        variants={containerItemsVariants}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence>
          {products.map((product, index) => (
            <CardLens key={index} {...product} />
          ))}
        </AnimatePresence>
      </motion.div>
    </ContainerMainLayout>
  );
}
