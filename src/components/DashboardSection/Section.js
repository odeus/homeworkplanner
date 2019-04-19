import styled, { css } from 'styled-components';
import { transparentize } from 'polished';

export default styled.div`
  ${props => props.row && css`
      grid-row: ${props.row};
  `}
  
  background-color: ${props => transparentize(.7, props.theme.lightAccent)};
  padding: 2rem;
  border-radius: 2rem;
`;
