import { useCart } from "@shared/hooks/use-cart";
import { formatCurrency } from "@shared/utils/formatters/format-currency";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cartPageAnimation } from "./animation";
import { CartContainer, CartItem } from "./styles";

export default function CartPage() {
  const { cart, updateCart, decreaseCart } = useCart();

  const totalPriceCart = cart.items.reduce((accumulator, current) => {
    return accumulator + current.price * current.quantity;
  }, 0);

  const navigate = useNavigate();

  useEffect(() => {
    if (!cart.total_items) {
      navigate("/");
    }
  }, [cart]);

  return (
    <CartContainer {...cartPageAnimation}>
      {cart.items.map((item, index) => (
        <CartItem key={index}>
          <span>{item.name}</span>
          <span>{item.description}</span>
          <footer>
            <div className="container_buttons">
              <button onClick={() => updateCart(item)}>+</button>
              {item.quantity}
              <button onClick={() => decreaseCart(item)}>-</button>
            </div>
            <span className="price">
              {formatCurrency({ amount: item.price * item.quantity })}
            </span>
          </footer>
        </CartItem>
      ))}
      <div className="container_total_price">
        Total:
        <span className="total_price">
          {formatCurrency({ amount: totalPriceCart })}
        </span>
      </div>
    </CartContainer>
  );
}
