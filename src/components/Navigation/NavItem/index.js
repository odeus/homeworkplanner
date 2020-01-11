import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const ListItem = styled(Link)`
  display: flex;
  justify-content: center;
  cursor: pointer;
  fill: white;
  width: 100%;

  svg {
    width: 100%;
    height: auto;
  }
`;

const NavItem = ({ to, children }) => (
    <ListItem to={to} exact>
        {children}
    </ListItem>
);

export default NavItem;
