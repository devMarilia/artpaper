import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
:root {
  --white : #ffffff;
  --gray-primary: #f7f7f7;
  --gray: #A8A8A8; 
  --gray-secundery: #a4a4a4;
  --pink: #F6D1C3;
  --black: #000000;
 
}
.title-principal {
    font-family: 'Dancing Script', cursive;
    color: var(--pink);
}
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body, input, button {
    font: 14px 'Roboto', sans-serif;
    color: #222222;
  }
  ul , li {
    text-decoration: none;
    list-style: none;
  }
  a {
    text-align: none;
    text-decoration: none;
    list-style: none;
  }
  img {
    display: block;
    max-width: 100%;
  }
  button {
    cursor: pointer;
  }
`;
