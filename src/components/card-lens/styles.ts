import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)`
  * {
    font-size: 0.85rem;
    color: var(--neutral5);
  }

  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  max-height: 350px;
  width: 100%;
  border: 1px solid var(--neutral2);
  gap: 3rem;
  cursor: pointer;
  transition: all ease 0.2s;

  .product_title {
    color: var(--blue);
  }

  .descriptions,
  .prices {
    display: flex;
    flex-direction: column;
  }

  .prices {
    span:last-child {
      font-size: 1rem;
      font-weight: 500;
      color: var(--blue);
    }
  }

  .price {
    font-weight: 500;
  }

  &:hover {
    border-color: var(--blue);
  }
`;
