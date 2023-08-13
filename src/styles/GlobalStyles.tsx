import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

  body {
    @font-face {
    font-family: "clockicons";
    src: url("https://db.onlinewebfonts.com/t/84cb021d5f9af287ffff84b61beef6dc.eot");
    src: url("https://db.onlinewebfonts.com/t/84cb021d5f9af287ffff84b61beef6dc.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/84cb021d5f9af287ffff84b61beef6dc.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/84cb021d5f9af287ffff84b61beef6dc.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/84cb021d5f9af287ffff84b61beef6dc.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/84cb021d5f9af287ffff84b61beef6dc.svg#clockicons")format("svg");
}

@font-face {
    font-family: "Orbitron";
    src: url("https://db.onlinewebfonts.com/t/19b2f334900bf462d165704c8792fa1c.eot");
    src: url("https://db.onlinewebfonts.com/t/19b2f334900bf462d165704c8792fa1c.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/19b2f334900bf462d165704c8792fa1c.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/19b2f334900bf462d165704c8792fa1c.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/19b2f334900bf462d165704c8792fa1c.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/19b2f334900bf462d165704c8792fa1c.svg#Orbitron")format("svg");
}

@font-face {
    font-family: "Montserrat";
    src: url("https://db.onlinewebfonts.com/t/5fc6f4fd75e944a52a342ab2c7f100f1.eot");
    src: url("https://db.onlinewebfonts.com/t/5fc6f4fd75e944a52a342ab2c7f100f1.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/5fc6f4fd75e944a52a342ab2c7f100f1.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/5fc6f4fd75e944a52a342ab2c7f100f1.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/5fc6f4fd75e944a52a342ab2c7f100f1.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/5fc6f4fd75e944a52a342ab2c7f100f1.svg#Montserrat")format("svg");
}

    background: linear-gradient(90deg, rgba(165,232,255,1) 0%, rgba(238,244,244,1) 50%, rgba(165,232,255,1) 100%);;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    font-family: 'Montserrat', sans-serif;
    color: #8ea2ab;
    font-size: .875rem;
    line-height: 20px;
    margin: 0
  }

  .h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    color: #fff;
    font-weight: 700;}
`;

export default GlobalStyle;
