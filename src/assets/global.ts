import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
  *,
  *:after,
  *:before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background-color: #F9F9FA;
  }

  a {
    text-decoration: none;

    &:visited,
    &:active {
      color: #a4a4a4;
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
