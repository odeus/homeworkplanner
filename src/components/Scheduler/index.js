import React, { useState } from 'react';
import styled from 'styled-components';
import { weekStart } from '../../shared/dates/date';

import Grid from './Grid';
import Toolbar from './Toolbar';

const Wrapper = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

const Scheduler = ({ beginAt }) => {
    const [date, setDate] = useState(weekStart(new Date()));

    return (
        <Wrapper>
            <Toolbar date={date} setDate={setDate} />
            <Grid date={date} beginAt={beginAt} />
        </Wrapper>
    );
};

export default Scheduler;
