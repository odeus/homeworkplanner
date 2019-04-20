import React from 'react';

import Wrapper from './Wrapper'
import Router from './Router';
import Navigation from '../components/Navigation';

const layout = props => (
  <Wrapper>
      <Navigation />
      <Router />
  </Wrapper>
);

export default layout;
