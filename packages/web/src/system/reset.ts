import { css } from "@emotion/core";

const reset = css`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", sans-serif;
    font-size: 16px;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    min-height: fill-available;
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    scroll-padding-top: 0;
    -webkit-scroll-padding-top: 0;
    -moz-scroll-padding-top: 0;
    -ms-scroll-padding-top: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;

    focus:not(:focus-visible) {
      outline: none;
    }
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul {
    margin: 0;
    padding: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
    box-sizing: border-box;
    font-weight: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ol,
  ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  ::selection {
    background-color: #000000;
    color: white;
  }
`;

export default reset;
