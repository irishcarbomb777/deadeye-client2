import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    font-family: prompt, sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0px 0px 0px 0px;
  }
  p {
    font-family: prompt, sans-serif;
    font-weight: 400;
    font-style: normal;
    margin: 0px 0px 0px 0px;
  }
  :root{
    --bankroll-teal: #33ffc5;
    --bankroll-darkgray: #202020;
    --bankroll-gray: #606060;
    --bankroll-lightgray: #666666;
    --bankroll-gold: #eeca48;
  }

`

export default GlobalStyle;