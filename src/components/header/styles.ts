import styled from "styled-components";

export const StyledHeader = styled.header`
  background: var(--neutral3);
  height: 10vh;
  img {
    border-radius: 0.5rem;
    margin: 0.5rem;
  }

  main {
    max-width: 980px;
    margin: auto;
    height: 100%;
    display: flex;
    justify-content: space-between;

    ul {
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
  }
`;
