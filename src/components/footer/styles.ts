import styled from "styled-components";

export const PaymentMethods = styled.div`
  background: var(--neutral1);
  display: flex;
  min-height: 80px;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--neutral5);
`;

export const FooterContainer = styled.footer`
  span {
    color: var(--neutral5);
    padding: 1rem;
    display: flex;
    margin: auto;
    text-align: center;
    max-width: 956px;
    font-size: var(--font-small);
  }
`;
