import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
