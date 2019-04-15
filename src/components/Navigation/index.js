import React from 'react';

import Item from './Item';
import Logo from './Logo';
import NavigationWrapper from './NavigationWrapper';

const navigation = () => (
    <div className={styles.nav}>
      <div>
        <Logo link="https://via.placeholder.com/150" alt="Logo"/>
      </div>
      <Item>test</Item>
      <Item>test2</Item>
      <Item>test3</Item>
      <Item>test4</Item>
    </div>
);

export default navigation;
