import React, { Component } from 'react';

import DashboardWrapper from './Dashboard';
import DashboardSection from '../../components/DashboardSection/';
import AddCircle from '../../components/AddCircle';
import AssignmentCard, { Wrapper } from '../../components/AssignmentCard';

class Dashboard extends Component {
  render() {
    return (
        <DashboardWrapper>
            <DashboardSection title="Today" gridRow="1 / -1">
                <Wrapper padding={2}>
                    <AssignmentCard description="8:20 - 9:10" title="Nederlands" />
                    <AssignmentCard description="9:10 - 10:00" title="Duits" />
                    <AssignmentCard description="10:20 - 11:10" title="Natuurkunde" />
                    <AssignmentCard description="11:10 - 12:00" title="Economie" />
                    <AssignmentCard description="12:30 - 13:20" title="Engels" />
                    <AssignmentCard description="13:20 - 14:10" title="Informatica" />
                    <AssignmentCard description="14:25 - 15:15" title="CKV" />
                </Wrapper>
          </DashboardSection>
          <DashboardSection title="Assignments" gridRow="1 / -1" />
          <DashboardSection title="Tests" gridRow="1 / span 1" />
          <DashboardSection title="Calendar" gridRow="2 / span 1"/>
          <AddCircle radius={6} />
        </DashboardWrapper>
    )
  }
}

export default Dashboard;
