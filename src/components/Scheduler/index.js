import React from 'react';
import { getMonth } from '../../shared/dates/helpers';
import styled from 'styled-components';

import Grid from './Grid';
import Toolbar from './Toolbar';

const Wrapper = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

const Scheduler = ({ beginAt }) => {
  return (
    <Wrapper>
      <Toolbar>{getMonth()}</Toolbar>
      <Grid beginAt={beginAt} />
    </Wrapper>
  )
};

export default Scheduler;
