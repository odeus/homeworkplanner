import React, { Component } from 'react';
import AssignmentContext from '../../shared/contexts/context';

import AssignmentsWrapper from './Assignments';
import Heading from '../../components/Heading';
import Header from './Header';
import Filterer from '../../components/Filterer';
import AddCircle from '../../components/AddCircle';
import Input from '../../components/Input';
import { AssignmentCard, Wrapper } from '../../components/Card';

class Assignments extends Component {
  static contextType = AssignmentContext;

  state = {
    quickEntryValue: '',
  };

  addAssignmentHandler = (value) => {
    const [assignments, setAssignments] = this.context;
    setAssignments([
        ...assignments,
        {
          title: value,
          descr: 'test'
        }
    ]);
    this.setState({
      quickEntryValue: ''
    })
  };

  render() {
    const [assignments] = this.context;

    return (
        <AssignmentsWrapper>
          <Header>
            <Heading.medium>Assignments</Heading.medium>
            <div>{assignments.length} assignments left</div>
            <Filterer />
          </Header>
          <Input
              placeholder="Quick Entry..."
              onChange={(event) => this.setState({ quickEntryValue: event.target.value })}
              onKeyDown={(event) => event.keyCode === 13 ? this.addAssignmentHandler(event.target.value) : null}
              value={this.state.quickEntryValue}
          />
          <Wrapper padding={3}>
            {assignments.map(assignment => (
                <AssignmentCard key={assignment.title} checkbox title={assignment.title} description={assignment.descr} />
            ))}
          </Wrapper>
          <AddCircle radius={6} />
        </AssignmentsWrapper>
    )
  }
}

export default Assignments;
