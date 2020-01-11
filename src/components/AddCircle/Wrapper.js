import styled from 'styled-components';
import { rgba } from 'polished';

export default styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 2rem;
  bottom: 2rem;
  width: ${(props) => props.radius}rem;
  height: ${(props) => props.radius}rem;
  border-radius: 50%;
  box-shadow: 1rem 1rem .5rem ${rgba('#000', 0.3)};
  cursor: pointer;
  
  background-color: ${(props) => props.theme.mainColor};
  
  :hover div {
    transform: rotate(45deg);
  }
`;
