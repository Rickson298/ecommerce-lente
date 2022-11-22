import { useContext } from "react";
import { CartContext } from "@shared/contexts/cart-context";

export function useCart() {
  const cartContext = useContext(CartContext);
  if (!cartContext) throw Error("useCart must be inside of cart provider");
  return cartContext;
}
