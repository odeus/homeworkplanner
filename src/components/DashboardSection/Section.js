import styled, { css } from 'styled-components';

import { small } from '../Heading';

export default styled.div`
  ${(props) => props.row && css`
      grid-row: ${props.row};
  `}
  
  ${(props) => props.padding && css`
     padding: ${props.padding}rem;
  `}
  
  border-right: .5rem solid ${(props) => props.theme.lightAccent};
  background-color: ${(props) => props.theme.background};
 
  
  ${small} {
    text-align: center;
    color: #0C8B9E;
    padding: 2rem;
    border-top: .5rem solid ${(props) => props.theme.lightAccent};
    border-bottom: .5rem solid ${(props) => props.theme.lightAccent}
  }
`;
