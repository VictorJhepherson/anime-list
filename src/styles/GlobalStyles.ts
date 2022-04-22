import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 300;
    src: local(''),
        url('/fonts/roboto-v20-latin-300.woff2') format('woff2'),
        url('/fonts/roboto-v20-latin-300.woff') format('woff');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    src: local(''),
        url('/fonts/roboto-v20-latin-regular.woff2') format('woff2'),
        url('/fonts/roboto-v20-latin-regular.woff') format('woff');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    src: local(''),
        url('/fonts/roboto-v20-latin-700.woff2') format('woff2'),
        url('/fonts/roboto-v20-latin-700.woff') format('woff');
  }
  @font-face {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 900;
    src: local(''),
        url('/fonts/roboto-v20-latin-900.woff2') format('woff2'),
        url('/fonts/roboto-v20-latin-900.woff') format('woff');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  html{
    font-size: 62.5%;
  }
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: ${() => theme.font.fontFamily};
    font-size: 1.6rem;
    background-color: ${() => theme.colors.white};
  }
`;
