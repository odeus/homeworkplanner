import React from 'react';

import NavList from './NavList';
import NavItem from './NavItem';
import * as Logo from './Logo';
import NavigationWrapper from './NavigationWrapper';

const navigation = () => (
    <NavigationWrapper>
      <Logo.wrapper>
        <Logo.img link="https://via.placeholder.com/150" alt="Logo" />
      </Logo.wrapper>
      <NavList>
        <NavItem to="/">Dashboard</NavItem>
        <NavItem to="/calendar">Calendar</NavItem>
        <NavItem to="/planner">Planner</NavItem>
      </NavList>
    </NavigationWrapper>
);

export default navigation;
