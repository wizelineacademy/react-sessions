import { injectGlobal } from 'styled-components';
import SoberanaSans from './fonts/soberanasans-regular-webfont.ttf';

injectGlobal`
@font-face {
  font-family: "SoberanaSans";
  src: ${SoberanaSans};
}

@keyframes ul {
  0% { 
    width:0;
  }
  100% { 
    width:calc(100% - 23px);
  }
}
`;