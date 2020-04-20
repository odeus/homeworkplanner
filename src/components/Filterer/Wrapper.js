import styled from 'styled-components';

export default styled.div`
  flex: 1 100%;
  padding: 1rem 0;
  color: ${(props) => props.theme.textColor}
  
  display: flex;
  align-items: center;
  
  & > * {
    margin-right: 1rem;
  }
`;
