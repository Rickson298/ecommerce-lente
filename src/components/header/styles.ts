import styled from "styled-components";

export const StyledHeader = styled.header<{
  isInCartPage: boolean;
}>`
  background: linear-gradient(90deg, #abbeff, #8980ff, #8980ff, #abbeff);
  z-index: 9999;
  position: fixed;
  width: 100%;
  height: 10vh;
  background-size: 200%;
  transition: all ease 0.2s;
  background-position: ${({ isInCartPage }) => (isInCartPage ? "100%" : "0%")};

  img {
    border-radius: 0.5rem;
    margin: 0.5rem;
  }
  * {
    color: var(--white);
  }

  .company_name {
    font-size: var(--font-large);
  }

  main {
    max-width: 956px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .link_cart {
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      height: fit-content;

      .counter_items {
        position: absolute;
        top: 0;
        right: -10px;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        font-size: var(--font-small);
        border-radius: 50%;
        background: var(--white);
        color: var(--blue);
      }
    }

    .links {
      display: flex;
      align-items: center;
      height: 100%;
    }

    .lens {
      width: 100%;
      display: flex;
      justify-content: end;
      align-items: center;
      gap: 1rem;

      li {
        cursor: pointer;
        position: relative;

        ::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -6px;
          opacity: 0;
          left: 0;
          background: var(--black);
          transition: all ease 0.2s;
        }

        :hover {
          ::before {
            bottom: -3px;
            opacity: 1;
          }
        }
      }
    }

    @media (max-width: 968px) {
      padding-inline: 1rem;
    }
  }
`;
