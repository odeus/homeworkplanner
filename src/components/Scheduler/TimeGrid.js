import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: .8fr repeat(7, 1fr);
  grid-template-rows: repeat(26, minmax(min-content, 6rem));
  
  border-left: 1px solid ${props => props.theme.lightAccent};
  max-height: 100vh;
  overflow-y: scroll;
`;
