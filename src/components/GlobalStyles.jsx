import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Lekton', sans-serif;
  }

  h1 {
    font-size: 67px;
  }

  h2{
    font-size: 50px
  }

  h3{
    font-size: 38px;
  }

  h4 {
    font-size: 28px;
  }

  h5 {
    font-size: 21px;
  }

  p {
    font-size: 16px;
  }


`

export default GlobalStyles;
