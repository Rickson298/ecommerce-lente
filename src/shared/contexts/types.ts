import { CardLensProps } from "@components/card-lens/types";

export type CartContextProviderProps = {
  cart: Cart;
  updateCart(cartItem: CardLensProps): void;
  decreaseCart(cartItem: CardLensProps): void;
};

export type Cart = {
  total_items: number;
  items: Array<CartItem>;
};

export type CartItem = CardLensProps & { quantity: number };
