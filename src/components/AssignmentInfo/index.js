import React from 'react';

import Wrapper from './Wrapper';
import Message from './Message';

const assignmentInfo = ({ assignment }) => {
  return (
      <Wrapper>
        {!assignment ? <Message>Please click on an assignment to see its details</Message> : null}
      </Wrapper>
  )
};

export default assignmentInfo;
