import styled from "styled-components";

export const PaymentMethods = styled.div`
  background: var(--neutral1);
  display: flex;
  min-height: 80px;
  justify-content: center;
  align-items: center;
  color: var(--neutral5);

  @media (min-width: 768px) {
    gap: 0.5rem;
  }

  .container_icons_payments {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
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
