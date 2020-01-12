import React from 'react';
import styled from 'styled-components';

import Link from './Link';

const ListItem = styled.div`
  display: flex;
  fill: white;
  width: 100%;
  background-color: ${(props) => props.color};
  align-items: flex-start;

  &:last-child {
    flex: 1;
  }
`;

const NavItem = ({ to, children, color = 'transparent' }) => (
    <ListItem color={color}>
        <Link to={to} exact>
            {children}
        </Link>
    </ListItem>
);

export default NavItem;
