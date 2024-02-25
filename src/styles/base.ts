import { css } from '@emotion/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const base = css`
  html,
  body,
  #__next {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: 'Manrope', new-hero, -apple-system, BlinkMacSystemFont,
      Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
      Novarese, Helvetica Neue, sans-serif;
  }

  @font-face {
    font-family: 'Novarese';
    src: url('/fonts/ITC Novarese Bold.otf') format('otf'),
      url('/fonts/ITC Novarese Bold.otf') format('otf');
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }
`;

export default base;
