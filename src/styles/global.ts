import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {

    --red: #e52e4d;
    --green: #00875f;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #171718;
    --background-card:#1C1F23;
    --shape: #ffffff;
    --border: #26292D;


    --primary: #142335;
    --secondary: #2a3691;
    --ter: #1AAADC;

    --gray-300:#978F97;
    --gray-400: #6A626E;
    --gray-500: #403E4E;
    --gray-600: #142335;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%
    }

    @media (max-width: 720px) {
      font-size: 87.5%
    }
  }

  body {
    background: var(--background);
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }
  
  h1,h2,h3,h4,h5, h5 {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
