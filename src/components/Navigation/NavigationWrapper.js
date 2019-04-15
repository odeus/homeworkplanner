import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; // TODO: REMOVE THIS

  background-color: aqua;
  padding: 2rem;

  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;
