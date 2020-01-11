import React from 'react';

import NavList from './NavList';
import NavItem from './NavItem';
import * as Logo from './Logo';
import logoSquare from '../../assets/logo_square.png';
import NavigationWrapper from './NavigationWrapper';
import { ReactComponent as DashboardLogo } from '../../assets/dasboard.svg';

const navigation = () => (
    <NavigationWrapper>
        <Logo.wrapper>
            <Logo.img link={logoSquare} alt="Logo" />
        </Logo.wrapper>
        <NavList>
            <NavItem to="/" logo={DashboardLogo}>
                <DashboardLogo />
            </NavItem>
            <NavItem to="/calendar">Calendar</NavItem>
            <NavItem to="/assignments">Assignments</NavItem>
            <NavItem to="/school">School</NavItem>
            <NavItem to="/teachers">Teachers</NavItem>
            <NavItem to="/holidays">Holidays</NavItem>
        </NavList>
    </NavigationWrapper>
);

export default navigation;
