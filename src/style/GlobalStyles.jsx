import { createGlobalStyle } from "styled-components";
import Cyberpunk from "../fonts/Cyberpunk_RUS_BY_LYAJKA.ttf";
import Font_Over from "../fonts/Font_Over.otf";
import Exo_2 from "../fonts/Exo2-VariableFont_wght.ttf"

const Globals = createGlobalStyle`
    @font-face {
        font-family: 'Cyberpunk';
        src: url(${Cyberpunk});
        font-weight: 400;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: 'Font_Over';
        src: url(${Font_Over});
        font-weight: 500;
        font-style: normal;
        font-display: fallback;
    }
    @font-face {
        font-family: 'Exo_2';
        src: url(${Exo_2});
        font-weight: 300, 400, 600, 700, 800;
        font-style: normal;
        font-display: fallback;
    }
    
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        text-decoration:none;
    }

    body {
        color: #CF52FE;
        background-color: #1E1E1E;;
        font-size: 100%;
        font-family: 'Exo_2'  sans-serif;
        font-family: 'Font_Over';
        font-family: 'Cyberpunk';
    }
`;

export default Globals;