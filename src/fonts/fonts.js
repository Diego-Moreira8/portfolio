/* 
  Thank you Sibylle Sehl for helping me achieve this!
  https://dev.to/alaskaa/how-to-import-a-web-font-into-your-react-app-with-styled-components-4-1dni
*/

import { createGlobalStyle } from "styled-components";

import ubuntuMonoRegular from "./UbuntuMono-Regular.woff2";
import ubuntuMonoBold from "./UbuntuMono-Bold.woff2";
import ubuntuMonoItalic from "./UbuntuMono-Italic.woff2";
import ubuntuMonoBoldItalic from "./UbuntuMono-BoldItalic.woff2";

export default createGlobalStyle`
  @font-face {
    font-family: "Ubuntu Mono";
    src: url(${ubuntuMonoRegular}) format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  
  @font-face {
    font-family: "Ubuntu Mono";
    src: url(${ubuntuMonoBold}) format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "Ubuntu Mono";
    src: url(${ubuntuMonoItalic}) format('woff2');
    font-weight: 400;
    font-style: italic;
  }

  @font-face {
    font-family: "Ubuntu Mono";
    src: url(${ubuntuMonoBoldItalic}) format('woff2');
    font-weight: 700;
    font-style: italic;
  }
`;
