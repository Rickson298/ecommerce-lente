import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
    --white: #FFFFFF;
    --neutral1: #EAEFED;
    --neutral2: #CAD6D1;
    --neutral3: #A3B8B0;
    --neutral4: #709085;
    --neutral5: #587169;
    --neutral6: #465953;
    --black: #333;
    --dark: #222;
--font-small:0.75rem;
--font-normal:1rem;
--font-large:1.25rem  
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--neutral1);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  
  html{
    font-size: 100%;
  }

  *{
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--black);
  }

  li{
    list-style: none;
  }

  button{
    border:none;
    padding:1rem 1.5rem;
    cursor:pointer
  }
`;
