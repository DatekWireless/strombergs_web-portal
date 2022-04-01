import { createGlobalStyle } from "styled-components";
import RobotoEot from "../assets/fonts/roboto-v29-latin/roboto-v29-latin-regular.eot";
import RobotoTtf from "../assets/fonts/roboto-v29-latin/roboto-v29-latin-regular.ttf";
import RobotoWoff from "../assets/fonts/roboto-v29-latin/roboto-v29-latin-regular.woff";
import RobotoWoff2 from "../assets/fonts/roboto-v29-latin/roboto-v29-latin-regular.woff2";
import RobotoSvg from "../assets/fonts/roboto-v29-latin/roboto-v29-latin-regular.svg";

const GlobalStyles = createGlobalStyle`

@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  src: url(${RobotoEot}); /* IE9 Compat Modes */
  src: local(''),
       url(${RobotoEot}) format('embedded-opentype'), /* IE6-IE8 */
       url(${RobotoWoff2}) format('woff2'), /* Super Modern Browsers */
       url(${RobotoWoff}) format('woff'), /* Modern Browsers */
       url(${RobotoTtf}) format('truetype'), /* Safari, Android, iOS */
       url(${RobotoSvg}) format('svg'); /* Legacy iOS */
};
`;

export default GlobalStyles;
