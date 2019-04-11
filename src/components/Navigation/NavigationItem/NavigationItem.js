import React from 'react';
import styles from './NavigationItem.module.scss'

const navigationItem = ({ children }) => (
    <div className={styles['nav-item']}>
        {children}
    </div>
);

export default navigationItem;