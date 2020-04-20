import styled from 'styled-components';

export const Scroll = styled.button`
  font-size: 3rem;
  border: none;
  background-color: transparent;
  padding: 0 1rem;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  transition: fill .2s;
  outline: none;
  
  &::-moz-focus-inner {
    border: none;
  }
  
  &:hover {
    fill: ${(props) => props.theme.mainColor};
  }
`;

export const Today = styled.button`
  font-size: 1.6rem;
  background-color: transparent;
  padding: .5rem 1rem;
  color: ${(props) => props.theme.textColor};
  cursor: pointer;
  outline: none;
  border: none;
  position: relative;
  
  &::-moz-focus-inner {
    border: none;
  }
  
  &:active {
    transform: translateY(2px);
  }
`;
