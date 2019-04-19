import styled from 'styled-components';

export default styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  
  li:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
