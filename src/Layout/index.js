import React, { useState } from 'react';
import AssignmentContext from '../shared/contexts/context';

import Wrapper from './Wrapper'
import Router from './Router';
import Navigation from '../components/Navigation';

const layout = props => {
  const assignmentsState = useState([]);

  const setAssignment = (assignment) => {
    console.log('test');
    assignmentsState[1](assignment)
  };

  return (
      <Wrapper>
        <Navigation />
        <AssignmentContext.Provider value={[assignmentsState[0], setAssignment]}>
          <Router />
        </AssignmentContext.Provider>
      </Wrapper>
  );
};

export default layout;
