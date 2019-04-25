import styled from 'styled-components';

export default styled.button`
  font-size: 3rem;
  border: none;
  background-color: transparent;
  padding: 0 1rem;
  color: ${props => props.theme.textColor};
  cursor: pointer;
  transition: fill .2s;
  outline: none;
  
  &::-moz-focus-inner {
    border: none;
  }
  
  &:hover {
    fill: ${props => props.theme.mainColor};
  }
`;
