import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; // TODO: REMOVE THIS

  background-color: ${props => props.theme.textColor};
  padding: 2rem;
`;
