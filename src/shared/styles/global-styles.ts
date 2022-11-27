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
    --blue:#1889BC;
--font-small:0.75rem;
--font-normal:1rem;
--font-large:1.25rem  
  }

  body {
    margin: 0;
    padding: 0;
    background: var(--white);
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }


  body::-webkit-scrollbar{
    background: none;
    width:8px
  }
  body::-webkit-scrollbar-thumb{
    background: #abbeff;
    border-radius: 0.5rem;
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
    cursor:pointer;
    transition:all ease 0.2s;
    border-radius: 0.5rem;
    position: relative;
    z-index: 1;
    background: #b7d5ac;
    color:white !important;
    overflow: hidden;
  }

  button:disabled{
    filter:brightness(80%);
  }

  button:hover::after{
    width: 100%;
  }
  button:after{
    content: '';
    height: 100%;
    position: absolute;
    width:0%;
    left: 0;
    top: 0;
    border-radius: 0.5rem;
    z-index: -1;
    background: #93bf85;
    transition: all ease 0.2s;
  }
`;
