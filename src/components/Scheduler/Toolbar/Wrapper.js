import styled from 'styled-components';

export const TOOLBAR_HEIGHT = '6rem';

export default styled.div`
  height: ${TOOLBAR_HEIGHT};
  background: ${props => props.theme.background};
  font-size: 2rem;
  display: flex;
  align-items: center;
  padding: 0 5rem;
  justify-content: space-around;
`;
