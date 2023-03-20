import { createGlobalStyle } from "styled-components";
import BG from '../assets/BG.jpg'

export const GlobalStyle = createGlobalStyle`

@font-face {
font-family: "Chinese Rock";
src: local("Chinese Rock"),
url("./fonts/chinese_rock.otf") format("truetype");
}

body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background-image: url(${BG});
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

li {
    list-style: none;
    font-family: "Teko", sans-serif
}

 span {
    color: #f3ecc5;
}

h1,h2,h3,h4,h5 {
    font-family: "Teko", sans-serif;
    color: #E81F1C;
}

p {
    color: #f3ecc5;
}

a {
    color: #E81F1C;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
    
    :hover {
        color: #fff;
        scale: 1.1;
    }
}

b {
    text-transform: uppercase;
    color: #E81F1C;
}

`
