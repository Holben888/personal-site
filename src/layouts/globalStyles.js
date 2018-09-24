import { injectGlobal } from 'styled-components'

injectGlobal`
  @font-face {
  font-family: Avenir-Black;
  src: url("/fonts/Avenir-Black.ttf");
  }

  @font-face {
  font-family: Avenir-Book;
  src: url("/fonts/Avenir-Book.ttf");
  }

  @font-face {
  font-family: Avenir-Light;
  src: url("/fonts/Avenir-Light.ttf");
  }

  @font-face {
  font-family: Avenir;
  src: url("/fonts/Avenir-Medium.ttf");
  }

  @font-face {
  font-family: Avenir-Oblique;
  src: url("/fonts/Avenir-MediumOblique.ttf");
  }

  * {
  box-sizing: border-box;
  }

  html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  }

  body {
  margin: 0;
  font-family: Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 20px;
`