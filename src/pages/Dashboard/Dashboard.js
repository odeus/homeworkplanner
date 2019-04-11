import React, { Component } from 'react';
import styles from './Dashboard.module.scss';

class Dashboard extends Component {
    render() {
        return (
            <div className={styles.dashboard}>
                <h1>Mama Mia</h1>
            </div>
        )
    }
}

export default Dashboard;