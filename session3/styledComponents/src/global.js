import { injectGlobal } from "styled-components";

injectGlobal`
@font-face{
    font-family: 'SoberanaSans';
    src: url('./fonts/soberanasans-regular-webfont.ttf')
}
    body {
        font-family:'SoberanaSans';
    }
`;