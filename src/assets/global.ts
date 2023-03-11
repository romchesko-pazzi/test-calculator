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
    background-color: ${props => props.theme.colors.backgroundColor};
    color: ${props => props.theme.colors.fontColor};
  }

  a {
    text-decoration: none;

    &:visited,
    &:active {
      color: ${props => props.theme.colors.unActiveLinkColor};
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;
