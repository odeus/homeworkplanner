import React, { Component } from 'react';

import AssignmentsWrapper from './Assignments';
import Heading from '../../components/Heading';
import Header from './Header';
import Filterer from '../../components/Filterer';
import AddCircle from '../../components/AddCircle';
import Input from '../../components/Input';
import Card from '../../components/AssignmentCard';
import Cards from './Cards';

class Assignments extends Component {
  state = {
    quickEntryValue: '',
    assignments: [{ title: 'Test Assignment', descr: 'Testing...' }]
  };

  addAssignmentHandler = (value) => {
    const assignments = [...this.state.assignments];
    assignments.push({
      title: value,
      descr: 'Test'
    });
    this.setState({
      assignments,
      quickEntryValue: ''
    })
  };

  render() {
    return (
        <AssignmentsWrapper>
          <Header>
            <Heading.medium>Assignments</Heading.medium>
            <div>{this.state.assignments.length} assignments left</div>
            <Filterer />
          </Header>
          <Input
              placeholder="Quick Entry..."
              onChange={(event) => this.setState({ quickEntryValue: event.target.value })}
              onKeyDown={(event) => event.keyCode === 13 ? this.addAssignmentHandler(event.target.value) : null}
              value={this.state.quickEntryValue}
          />
          <Cards>
            {this.state.assignments.map(assignment => (
                <Card key={assignment.title} title={assignment.title} description={assignment.descr} />
            ))}
          </Cards>
          <AddCircle radius={6} />
        </AssignmentsWrapper>
    )
  }
}

export default Assignments;
