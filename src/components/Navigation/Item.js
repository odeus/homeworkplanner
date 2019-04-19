import styled from 'styled-components';

export default styled.li`
  border-radius: 50%;
  height: 6rem;
  width: 6rem;
  font-size: 1.6rem;
  transition: all .2s;

  display: flex;
  align-items: center;
  justify-content: center;
  
  :hover {
    color: ${props => props.theme.darkAccent};
  }
`;
