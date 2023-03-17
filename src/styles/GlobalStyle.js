import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
 input {
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    padding: 0 11px;

    font-family: "Lexend Deca", sans-serif;
    font-weight:400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
    ::placeholder{
        color: #DBDBDB;
    }
    &:focus{
        outline-color: #666666;
    }
    :disabled{
      background:#F2F2F2;
      color: #AFAFAF;
    }
  }
  button {
    width: 303px;
    height: 45px;
    box-sizing: border-box;
    background-color: #52b6ff;
    border-radius: 4.63636px;
    border: none;
    display:flex;
    align-items: center;
    justify-content: center;

    font-family: "Lexend Deca", sans-serif;
    font-weight:400;
    font-size: 20.976px;
    line-height: 26px;
    color: #FFFFFF;
    :disabled{
      background:#52B6FF;
      opacity: 0.7;
    }
  }

`;

export default GlobalStyle;
