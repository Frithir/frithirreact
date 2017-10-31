import { injectGlobal } from 'styled-components'
import { normalize } from 'polished'

export const font = {
  primary: `'Open Sans', sans-serif`,
  system: `-apple-system, BlinkMacSystemFont,
    "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif`
}

export const color = {
  primary: '#FA5463',
  secondary: '#212121',
  lightGrey: 'whitesmoke'
}

export default () => injectGlobal`
  ${normalize()}


  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body, html {
    background-color: #1e1e1e;
  }

  body {
    margin: 0;
    padding: 0;
    font-size: 100px;
    line-height: 1.45;
    font-size: 1.25rem;
    text-rendering: optimizeLegibility;
    -webkit-font-variant-ligatures: common-ligatures;
    font-variant-ligatures: common-ligatures;
    -webkit-font-feature-settings: "kern", "liga";
    font-feature-settings: "kern", "liga";
    -webkit-font-kerning: normal;
    font-kerning: normal;
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: #f8f8f8;
    font-family: 'Marvin Visions', sans-serif;
    /*font-family: 'Montserrat', sans-serif;*/
  }

  img {
    max-width: 100%;
    display: block;
  }

  ol, ul {
    list-style: none
  }

  .black {
    color: #1e1e1e
  }

  .white {
    color: #f8f8f8
  }

  .truewhite {
    color: #fff
  }

  .pink {
    color: #e74769
  }

  .dark-orange {
    color: #e65f1d
  }

  .red {
    color: #e7461c
  }

  .cream {
    color: #eadfc1
  }

  .yellow {
    color: #ffd420
  }

  .orange {
    color: #f07f23
  }

  .bg-yellow {
    background-color: #ffd420;
  }
  .bg-cream {
    background-color: #eadfc1
  }
  .bg-pink {
    background-color: #e74769
  }

  .section {
    overflow: hidden;
  }

  .container {
    width: 80%;
    margin: 0 auto;
    font-size: 100px;
    padding: 4rem 0;
    text-align: center;
  }
  .bg-yellow .container {
    text-align: left;
  }

  .container ul {
    list-style: square;
    font-size: 3vw;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      display: flex;
      flex: 1 0 auto;
    }
  }
  @media (max-width: 800px) {
    .flex div:nth-child(odd) {
      display: none;
    }
  }

  p, li {
    font-size: 2.4rem;
  }
  @media (max-width: 500px) {
    p, li {
      font-size: 1.6rem;
    }
  }

  strong {
    font-weight: bold;
  }

  .cascade {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 0.3rem;
    text-transform: uppercase;
    padding: 1rem;
  }

  .light {
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
  }


  @media (max-width: 800px) {
    .container {
      width: 90%;
      padding: 3rem 0;
    }
  }

  @media (max-width: 400px) {
    .container {
      width: 94%;
      padding: 2rem 0;
    }
  }

`
