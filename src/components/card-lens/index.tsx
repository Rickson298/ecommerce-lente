import { useCart } from "@shared/hooks/use-cart";
import { formatCurrency } from "@shared/utils/formatters/format-currency";
import { listItemVariant } from "./animations";
import { CardContainer } from "./styles";
import { CardLensProps } from "./types";

export function CardLens(props: CardLensProps) {
  const { updateCart, cart } = useCart();

  return (
    <CardContainer variants={listItemVariant}>
      <div className="descriptions">
        <span className="product_title">{props.name}</span>
        <span>{props.description}</span>
      </div>
      <div className="prices">
        <del className="price">
          {formatCurrency({ amount: props.old_price })}
        </del>
        <span className="price">
          {formatCurrency({ amount: props.newest_price })}
        </span>
        <span>
          Em até {props.installments} x de{" "}
          {formatCurrency({ amount: props.unit_installment_price })}
        </span>
        <span>ou {formatCurrency({ amount: props.price })} à vista</span>
      </div>
      <button onClick={() => updateCart(props)}>Adicionar ao carrinho</button>
    </CardContainer>
  );
}
