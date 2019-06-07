import styled from 'styled-components';

export default styled.div`
  border-left: 2px solid ${props => props.theme.lightAccent};
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.hasAssignment ? 'flex-start': 'center'};
  align-items: center;
  padding: 3rem;
`;
