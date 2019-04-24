import styled from 'styled-components';
import { lighten } from 'polished'

export default styled.div`
  display: flex;
  flex-direction: column;  
  
  & > * {
    height: 6rem;
    background-color: ${props => props.currentDay ? lighten(.43, props.theme.mainColor)  : 'none'};
  }
`;
