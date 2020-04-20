import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default styled(NavLink)`
  text-decoration: none;
  color: ${(props) => props.theme.textColor};
  border: 1px solid ${(props) => props.theme.lightAccent};
  padding: 0 .5rem;
  
  &.active {
    color ${(props) => props.theme.mainColor};
    border: 1px solid ${(props) => props.theme.mainColor};
  }
`;
