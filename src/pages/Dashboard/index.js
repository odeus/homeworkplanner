import React, { Component } from 'react';

import DashboardWrapper from './Dashboard';
import DashboardSection from '../../components/DashboardSection/';

class Dashboard extends Component {
  render() {
    return (
        <DashboardWrapper>
          <DashboardSection title="Today" gridRow="1 / -1" />
          <DashboardSection title="Assignments" gridRow="1 / -1" />
          <DashboardSection title="Tests" gridRow="1 / span 1" />
          <DashboardSection title="Calendar" gridRow="2 / span 1"/>
        </DashboardWrapper>
    )
  }
}

export default Dashboard;
