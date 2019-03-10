import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    
    html, body {
        height: 100%;
    }
    
    
    #root {
        height: 100%;
    }
`;

export default GlobalStyles;