import styled from 'styled-components';

export default styled.div`
  background-color: ${props => props.theme.background};
  padding: 2rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 2rem;
`
