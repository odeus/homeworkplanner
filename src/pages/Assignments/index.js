import React, { Component } from 'react';
import AssignmentContext from '../../shared/contexts/context';

import AssignmentsWrapper from './Assignments';
import Heading from '../../components/Heading';
import Header from './Header';
import Filterer from '../../components/Filterer';
import AddCircle from '../../components/AddCircle';
import Input from '../../components/Input';
import { AssignmentCard, Wrapper as CardWrapper } from '../../components/Card';
import AssignmentInfo from '../../components/AssignmentInfo';
import AssignmentsContainer from './Container';

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

  openInfoHandler = () => {
    console.log("Yo")
  };

  render() {
    const [assignments] = this.context;

    return (
        <AssignmentsWrapper>
          <Header>
            <Heading.medium>Assignments</Heading.medium>
            <div>{assignments ? assignments.length : 0} assignments left</div>
            <Filterer />
          </Header>
          <AssignmentsContainer>
            <Input
                placeholder="Quick Entry..."
                onChange={(event) => this.setState({ quickEntryValue: event.target.value })}
                onKeyDown={(event) => event.keyCode === 13 ? this.addAssignmentHandler(event.target.value) : null}
                value={this.state.quickEntryValue}
            />
            <CardWrapper padding={3}>
              {assignments ? assignments.map(assignment => (
                  <AssignmentCard
                      key={assignment.title}
                      checkbox
                      title={assignment.title}
                      description={assignment.descr}
                  />
              )) : null}
            </CardWrapper>
            <AssignmentInfo />
          </AssignmentsContainer>
          <AddCircle radius={6} />
        </AssignmentsWrapper>
    )
  }
}

export default Assignments;
