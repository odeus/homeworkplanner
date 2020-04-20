import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
  
    box-sizing: border-box;
  }
  
  ::selection {
    background: ${(props) => props.theme.lightAccent};
  }
`;
