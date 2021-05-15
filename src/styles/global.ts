import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --background: #303050;
    --background2: #606080;
    --background3: #8080a0;
    --red: #d96a59;
    --green: #1ad442;
    --green2: #14c432;
    --green3: #3c914a;
    --yellow: #FFD061;
    --grey: #ddd;
    --grey2: #777;
    --dark: #101010;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }

        @media (max-width: 720px) {
            font-size: 87.5%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        scroll-behavior: smooth;
    }

    body, input, textarea, button {
        font-family: 'Balsamiq Sans', cursive;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 700;
    }

    button {
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    ::-webkit-scrollbar {
        width: 12px;
        height: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: var(--background2);
         background-color: color(main);
        border-radius: 20px;
        transition: 0.3s;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: var(--background3);
    }

.react-modal-overlay{
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 10px;
    max-height: 100vh;
    overflow-y: auto;
}

.close-button {
    position: absolute;
    top: 15px;
    right: 15px;
    border: 0;
    outline: 0;
    background-color: transparent;
    transition: 0.2s;
    

    &:hover {
        transform-origin: center;
        filter: brightness(0.7)
    }
  }

`;
