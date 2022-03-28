import { createGlobalStyle } from "styled-components";
import MiamaWoff from "./fonts/Miama.woff";
import MiamaWoff2 from "./fonts/Miama.woff2";
import PlayFairWoff2 from "./fonts/PlayfairDisplay.woff2";
import PlayFairWoff from "./fonts/PlayfairDisplay.woff";
import GaramondWoff from "./fonts/Garamond.woff";
import GaramondWoff2 from "./fonts/Garamond.woff2";

const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'Miama';
  src: url(${MiamaWoff2}) format('woff2'),
       url(${MiamaWoff}) format('woff');
}
@font-face {
  font-family: 'PlayFair';
  src: url(${PlayFairWoff2}) format('woff2'),
       url(${PlayFairWoff}) format('woff');
}
@font-face {
  font-family: 'Garamond';
  src: url(${GaramondWoff}) format('woff2'),
       url(${GaramondWoff2}) format('woff');
}
`;

export default FontStyles;
