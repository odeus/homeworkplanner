import React from 'react';

import NavList from './NavList';
import NavItem from './NavItem';
import * as Logo from './Logo';
import logoSquare from '../../assets/logo_square.png';
import NavigationWrapper from './NavigationWrapper';
import { ReactComponent as DashboardLogo } from '../../assets/dashboard.svg';
import { ReactComponent as CalendarLogo } from '../../assets/calendar.svg';
import { ReactComponent as SchoolLogo } from '../../assets/school.svg';
import { ReactComponent as ListLogo } from '../../assets/list.svg';

const navigation = () => (
    <NavigationWrapper>
        <Logo.wrapper>
            <Logo.img link={logoSquare} alt="Logo" />
        </Logo.wrapper>
        <NavList>
            <NavItem to="/" logo={DashboardLogo}>
                <DashboardLogo />
            </NavItem>
            <NavItem to="/calendar" color="#0F9FB7">
                <CalendarLogo />
            </NavItem>
            <NavItem to="/school" color="#0C8B9E">
                <SchoolLogo />
            </NavItem>
            <NavItem to="/assignments" color="#0C7D8F">
                <ListLogo />
            </NavItem>
        </NavList>
    </NavigationWrapper>
);

export default navigation;
