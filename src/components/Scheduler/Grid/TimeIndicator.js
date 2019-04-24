import styled from 'styled-components';

export default styled.div`
  height: 2px;
  width: 100%;
  position: absolute;
  top: calc(${props => props.currentTime}% + 12rem);
  z-index: 99;
  background-color: ${props => props.theme.darkAccent};
`;
