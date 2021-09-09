import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.24);
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
      display: block;
  }
  body {
      line-height: 1;
      -webkit-font-smoothing: antialiased !important;
      height: 100vh;
  }
  ol, ul {
      list-style: none;
  }
  blockquote, q {
      quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
      content: '';
      content: none;
  }
  html, body, #root {
      width: 100%;
      height: 100vh;
      color: #999;
      background: #fff;
  }
  body, input, button {
      font-size: 14px;
      font-family: 'Roboto', sans-serif;
  }
  a {
      text-decoration: none;
  }
  button {
      cursor: pointer;
  }
`;