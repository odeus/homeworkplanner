import React, { useState } from 'react';
import styled from 'styled-components';
import getWeek from 'date-fns/getWeek';

import Grid from './Grid';
import Toolbar from './Toolbar/';

const Wrapper = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

const Scheduler = ({ beginAt }) => {
  const [week, setWeek] = useState(getWeek(new Date()));

  return (
    <Wrapper>
      <Toolbar week={week} setWeek={setWeek} />
      <Grid week={week} beginAt={beginAt} />
    </Wrapper>
  )
};

export default Scheduler;
