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
