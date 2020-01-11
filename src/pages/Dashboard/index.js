import React, { useContext } from 'react';
import AssignmentContext from '../../shared/contexts/context';

import DashboardWrapper from './Dashboard';
import DashboardSection from '../../components/DashboardSection';
import AddCircle from '../../components/AddCircle';
import { ClassCard, AssignmentCard, Wrapper } from '../../components/Card';

const Dashboard = () => {
    const [assignments] = useContext(AssignmentContext);

    return (
        <DashboardWrapper>
            <DashboardSection title="Today" gridRow="1 / -1">
                <Wrapper padding={2}>
                    <ClassCard when="8:20 - 9:10" title="Nederlands" />
                    <ClassCard when="9:10 - 10:00" title="Duits" />
                    <ClassCard when="10:20 - 11:10" title="Natuurkunde" />
                    <ClassCard when="11:10 - 12:00" title="Economie" />
                    <ClassCard when="12:30 - 13:20" title="Engels" />
                    <ClassCard when="13:20 - 14:10" title="Informatica" />
                    <ClassCard when="14:25 - 15:15" title="CKV" />
                </Wrapper>
            </DashboardSection>
            <DashboardSection title="Assignments" gridRow="1 / -1">
                <Wrapper padding={2}>
                    {assignments
                        ? assignments.map((assignment) => (
                            <AssignmentCard
                                key={assignment.title}
                                checkbox
                                title={assignment.title}
                                description={assignment.descr}
                            />
                        ))
                        : null}
                </Wrapper>
            </DashboardSection>
            <DashboardSection title="Tests" gridRow="1 / span 1" />
            <DashboardSection title="Calendar" gridRow="2 / span 1" />
            <AddCircle radius={6} />
        </DashboardWrapper>
    );
};

export default Dashboard;
