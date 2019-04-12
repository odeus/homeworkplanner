import React, { Component } from 'react';
import styles from './Dashboard.module.scss'

import DashboardSection from '../../components/DashboardSection/DashboardSection';

class Dashboard extends Component {
    render() {
        return (
            <div className={styles.dashboard}>
                <DashboardSection classes={styles['dashboard__today']}>
                    Today
                </DashboardSection>
                <DashboardSection classes={styles['dashboard__assignments']}>
                    Assignments
                </DashboardSection>
                <DashboardSection classes={styles['dashboard__tests']}>
                    Tests
                </DashboardSection>
                <DashboardSection classes={styles['dashboard__calendar']}>
                    Calendar
                </DashboardSection>
            </div>
        )
    }
}

export default Dashboard;