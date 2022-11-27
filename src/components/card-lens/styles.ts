import { motion } from "framer-motion";
import styled from "styled-components";

export const CardContainer = styled(motion.div)`
  * {
    font-size: 0.85rem;
    color: var(--neutral5);
  }

  .lens {
    border-radius: 0.25rem;
  }

  border-radius: 0.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  min-height: 450px;
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
  box-shadow: 0px 0px 4px 2px var(--neutral1);
`;
