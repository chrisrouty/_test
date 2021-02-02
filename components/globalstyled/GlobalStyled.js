/** */

import { createGlobalStyle } from "styled-components";

/** */

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0; padding: 0; box-sizing: border-box;
  }
  body{
    background: #d3f3ff;
    font-family: 'Arial', sans-serif;
  }
  h1 {
    font-size: 64px;
  }
`;

export default GlobalStyle;