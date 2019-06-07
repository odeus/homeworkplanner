import React, { useContext } from 'react';
import AssignmentContext from '../../shared/contexts/context';

import Wrapper from './Wrapper';
import Message from './Message';
// import Heading from '../Heading';
import Input from '../Input';
import Description from './Desription';

const assignmentInfo = ({ id, change }) => {
  const [assignments] = useContext(AssignmentContext);
  const assignment = assignments[id] || {};

  const onChange = (event) => {
    change({...assignment, title: event.target.value })
  };

  return (
      <Wrapper hasAssignment={Object.keys(assignment).length !== 0}>
        {Object.keys(assignment).length === 0 ?
            <Message>Please click on an assignment to see its details</Message> :
            (
                <React.Fragment>
                  <Input value={assignment.title} onChange={onChange}/>
                  <Description>{assignment.descr}</Description>
                </React.Fragment>
            )
        }
      </Wrapper>
  )
};

export default assignmentInfo;
