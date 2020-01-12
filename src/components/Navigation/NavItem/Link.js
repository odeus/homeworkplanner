import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
  text-decoration: none;

  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    padding: 3rem;
    width: 100%;
    height: auto;
  }
`;
