import React, { Component } from 'react';
import AssignmentContext from '../../shared/contexts/context';

import AssignmentsWrapper from './Assignments';
import Heading from '../../components/Heading';
import Header from './Header';
import Filterer from '../../components/Filterer';
import Input from '../../components/Input';
import { AssignmentCard, Wrapper as CardWrapper } from '../../components/Card';
import AssignmentInfo from '../../components/AssignmentInfo';
import AssignmentsContainer from './Container';

class Assignments extends Component {
    constructor() {
        super();
        this.state = {
            quickEntryValue: '',
            selectedAssignment: {},
        };
    }

    addAssignmentHandler = (value) => {
        const [assignments, setAssignments] = this.context;
        setAssignments([
            ...assignments,
            {
                title: value,
                descr: 'test',
                id: assignments.length,
            },
        ]);
        this.setState({
            quickEntryValue: '',
        });
    };

    clickAssignmentHandler = (event) => {
        this.setState({
            selectedAssignment: event.currentTarget.id,
        });
    };

    changeAssignmentHandler = (assignment) => {
        const [assignments, setAssignments] = this.context;

        const newAssignments = [...assignments];
        newAssignments[assignment.id] = {
            title: assignment.title,
            id: assignment.id,
            descr: assignment.descr,
        };

        setAssignments(newAssignments);
    };

    render() {
        const [assignments] = this.context;
        const { quickEntryValue, selectedAssignment } = this.state;

        return (
            <AssignmentsWrapper>
                <Header>
                    <Heading.medium>Assignments</Heading.medium>
                    <div>
                        {assignments ? assignments.length : 0}
                        {' '}
                        assignments left
                    </div>
                    <Filterer />
                </Header>
                <AssignmentsContainer>
                    <Input
                        placeholder="Quick Entry..."
                        onChange={(event) => this.setState({ quickEntryValue: event.target.value })}
                        onKeyDown={(event) => (event.keyCode === 13
                            ? this.addAssignmentHandler(event.target.value)
                            : null)}
                        value={quickEntryValue}
                        margin={2}
                    />
                    <CardWrapper padding={3}>
                        {assignments
                            ? assignments.map((assignment, index) => (
                                <AssignmentCard
                                    key={index}
                                    id={index}
                                    checkbox
                                    title={assignment.title}
                                    description={
                                        assignment.descr.length < 50
                                            ? assignment.descr
                                            : `${assignment.descr.slice(0, 50)}...`
                                    }
                                    onClick={this.clickAssignmentHandler}
                                />
                            ))
                            : null}
                    </CardWrapper>
                    <AssignmentInfo id={selectedAssignment} change={this.changeAssignmentHandler} />
                </AssignmentsContainer>
            </AssignmentsWrapper>
        );
    }
}

Assignments.contextType = AssignmentContext;

export default Assignments;
