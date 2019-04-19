import React from 'react';

import NavList from './NavList';
import Item from './Item';
import * as Logo from './Logo';
import NavigationWrapper from './NavigationWrapper';

const navigation = () => (
    <NavigationWrapper>
      <Logo.wrapper>
        <Logo.img link="https://via.placeholder.com/150" alt="Logo" />
      </Logo.wrapper>
      <NavList>
        <Item>test</Item>
        <Item>test2</Item>
        <Item>test3</Item>
        <Item>test4</Item>
      </NavList>
    </NavigationWrapper>
);

export default navigation;
