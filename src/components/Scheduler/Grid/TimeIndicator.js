import styled from 'styled-components';

export default styled.div`
  height: 2px;
  width: 100%;
  position: absolute;
  margin: -2px; // Account for the rounding issues ;)
  
  /* Do the scrollHeight minus the length of the header times the percentage. And add the 12rem of the header
   to it again, so it begins at 'the start of the times'
   y = (containerHeight-headerHeight)*percentage + headerHeight*/
  top: calc((${props => props.scrollHeight}px - 12rem)*${props => props.percentage} + 12rem);
  z-index: 50;
  background-color: ${props => props.theme.mainColor};
`;
