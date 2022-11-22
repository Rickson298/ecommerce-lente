import { StyledHeader } from "./styles";
import { CiShoppingCart } from "react-icons/ci";
import { IoIosArrowBack } from "react-icons/io";
import { useCart } from "@shared/hooks/use-cart";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { linkAnimation } from "./animationts";

export function Header() {
  const { cart } = useCart();

  const { pathname } = useLocation();

  const isInCartPage = pathname === "/cart";

  return (
    <StyledHeader isInCartPage={isInCartPage}>
      <main>
        <span className="company_name">IRIS CORPORATION</span>

        <Link className="link_cart" to={isInCartPage ? "/" : "/cart"}>
          <AnimatePresence mode="wait">
            {!isInCartPage && cart.total_items > 0 ? (
              <motion.div key="cart_icon" {...linkAnimation}>
                <div className="counter_items">{cart.total_items}</div>
                <CiShoppingCart size="40px" />
              </motion.div>
            ) : (
              isInCartPage && (
                <motion.div key="back_icon" {...linkAnimation}>
                  <IoIosArrowBack size="40px" />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </Link>
      </main>
    </StyledHeader>
  );
}
