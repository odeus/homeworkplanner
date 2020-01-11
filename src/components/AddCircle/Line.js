import styled from 'styled-components';

export default styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #fff;
  position: absolute;
  transition: transform .1s ease-in;
`;
