import React from 'react';
import styles from './Navigation.module.scss';

import NavigationItem from './NavigationItem/NavigationItem';

const navigation = () => (
    <div className={styles.nav}>
        <div>
            <img className={styles['nav__logo']} src="https://via.placeholder.com/150" alt="Logo"/>
        </div>
        <NavigationItem>test</NavigationItem>
    </div>
);

export default navigation;