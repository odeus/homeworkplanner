import styled from 'styled-components';

export default styled.input`
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${(props) => props.theme.lightAccent};
  color: ${(props) => props.theme.textColor};
  padding: 1rem .5rem;
  font-size: 1.5rem;
  width: 90%;
  margin: ${(props) => (props.margin ? props.margin : 0)}rem;
  
  &::placeholder {
    color: ${(props) => props.theme.lightAccent}
  }
`;
