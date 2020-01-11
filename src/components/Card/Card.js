import styled from 'styled-components';

export default styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textColor};

  padding: 2rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }
`;
