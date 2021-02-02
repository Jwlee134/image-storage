import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import "../css/font.css";

const GlobalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
     }
     body{
        font-family: "Nunito", sans-serif;
        background-color:#F2F2F2;
     }
     a{
        text-decoration:none;
        color:black;
     }
`;

export default GlobalStyles;
