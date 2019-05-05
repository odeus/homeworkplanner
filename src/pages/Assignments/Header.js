import styled from 'styled-components';

export default styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  border-bottom: 2px solid ${props => props.theme.lightAccent};
  font-size: 1.4rem;
  flex-wrap: wrap;
  color: ${props => props.theme.textColor};
`;
