import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const ListItem = styled.li`
  font-size: 1.6rem;
  transition: all .2s;

  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const NavItem = ({ to, children }) => (
  <ListItem>
    <Link to={to} exact>{children}</Link>
  </ListItem>
);

export default NavItem;
