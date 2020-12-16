import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;

    font-family: Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    text-rendering: geometricprecision;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
  }

  body {
    padding: 0;
    -webkit-font-smoothing: antialiased;
    max-width: 1440px;
    margin: auto;
    min-height: 100%;
    width: auto;
    height: 100vh;
    min-width: 320px;
    background-color: rgb(255, 255, 255);


    @media (min-width: 768px) {
      padding: 8px;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  ul, li {
    list-style-type: none;
  }
`;
