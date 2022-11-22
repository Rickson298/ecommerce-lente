import { CardLensProps } from "@components/card-lens/types";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate, useNavigation, useParams } from "react-router-dom";
import { Cart, CartContextProviderProps, CartItem } from "./types";

export const CartContext = createContext({} as CartContextProviderProps);

export function CartProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate();

  const [cart, setCart] = useState<Cart>({ items: [], total_items: 0 });

  const cloneCart = JSON.parse(JSON.stringify(cart)) as Cart;

  function updateCart(cartItem: CardLensProps) {
    const itemAlreadyExists = cloneCart.items.find(
      (itemCart) => itemCart.id === cartItem.id
    );

    if (itemAlreadyExists) {
      itemAlreadyExists.quantity += 1;
      setCart(cloneCart);
      return;
    }
    setCart((prevCart) => ({
      total_items: prevCart.total_items + 1,
      items: [...prevCart.items, { ...cartItem, quantity: 1 }],
    }));
  }

  function decreaseCart(cartItem: CardLensProps) {
    const itemCart = cloneCart.items.find(
      (itemCart) => itemCart.id === cartItem.id
    ) as CartItem;

    if (itemCart.quantity > 1) {
      itemCart.quantity -= 1;
      setCart(cloneCart);
      return;
    }

    const filteredCart = cloneCart.items.filter(
      (item) => item.id !== cartItem.id
    );
    setCart((prevCart) => ({
      total_items: prevCart.total_items - 1,
      items: filteredCart,
    }));
  }

  useEffect(() => {
    if (cart.total_items === 0) {
      navigate("/");
    }
  }, [cart.total_items]);

  return (
    <CartContext.Provider value={{ cart, updateCart, decreaseCart }}>
      {children}
    </CartContext.Provider>
  );
}
