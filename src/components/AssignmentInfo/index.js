import React, { useContext } from 'react';
import AssignmentContext from '../../shared/contexts/context';

import Wrapper from './Wrapper';
import Message from './Message';
// import Heading from '../Heading';
import Input from '../Input';
import Textarea from '../Textarea';

const assignmentInfo = ({ id, change }) => {
  const [assignments] = useContext(AssignmentContext);
  const assignment = assignments[id] || {};

  const onChange = (name) => (event) => {
    change({...assignment, [name]: event.target.value });
  };

  return (
    <Wrapper hasAssignment={Object.keys(assignment).length !== 0}>
      {Object.keys(assignment).length === 0 ?
        <Message>Please click on an assignment to see its details</Message> :
        (
          <React.Fragment>
            <Input 
              style={{ fontWeight: 'bold' }} 
              value={assignment.title} 
              placeholder={!assignment.title ? 'Untitled Assignment' : ''}
              onChange={onChange('title')} />
            <Textarea defaultValue={assignment.descr} onChange={onChange('descr')}></Textarea>
          </React.Fragment>
        )
      }
    </Wrapper>
  );
};

export default assignmentInfo;
