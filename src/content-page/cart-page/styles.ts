import { motion } from "framer-motion";
import styled from "styled-components";

export const CartItem = styled.div`
  background: var(--white);
  padding: 1rem;
  min-height: 96px;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 4px 2px var(--neutral1);
  /* border: 1px solid var(--neutral2); */
  border: 1px solid var(--neutral2);
  display: flex;
  gap: 1rem;

  footer {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .container_product_infos {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-between;
  }

  img {
    max-width: 120px;
    object-fit: contain;
    border-radius: 0.25rem;
  }

  .container_buttons {
    display: flex;
    gap: 0.5rem;
    width: 100%;
    justify-content: space-between;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      padding: 0;

      &:last-of-type {
        background: var(--neutral4);
        color: var(--white);
      }
    }
  }

  .price {
    margin-left: auto;
    font-weight: 500;
  }
`;

export const CartContainer = styled(motion.div)`
  max-width: 956px;
  margin: auto;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  span {
    color: var(--neutral4);
  }

  width: 100%;

  .container_total_price {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-left: auto;
  }

  .total_price {
    color: var(--black);

    font-size: var(--font-large);
    line-height: var(--font-large);
    font-weight: 600;
  }
`;
