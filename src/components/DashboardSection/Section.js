import styled, { css } from 'styled-components';

import  { small } from '../Heading'

export default styled.div`
  ${props => props.row && css`
      grid-row: ${props.row};
  `}
  border: 1px solid ${props => props.theme.lightAccent};
  background-color: ${props => props.theme.background};
  
  ${small} {
    padding: 2rem;
    border-bottom: 2px solid ${props => props.theme.lightAccent}
  }
`;
