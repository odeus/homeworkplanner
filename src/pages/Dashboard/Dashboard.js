import React, { Component } from 'react';
import styles from './Dashboard.module.scss'

import DashboardSection from '../../components/DashboardSection/Section';

class Dashboard extends Component {
    render() {
        return (
            <div className={styles.dashboard}>
                <DashboardSection title="Today" classes={styles['dashboard__today']} />
                <DashboardSection title="Assignments" classes={styles['dashboard__assignments']} />
                <DashboardSection title="Tests" classes={styles['dashboard__tests']} />
                <DashboardSection title="Calendar" classes={styles['dashboard__calendar']} />
            </div>
        )
    }
}

export default Dashboard;
