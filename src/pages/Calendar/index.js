import React from 'react';
import Scheduler from '../../components/Scheduler';

import Wrapper from './Calendar';

const Calendar = () => (
    <Wrapper>
        <Scheduler beginAt={6} />
    </Wrapper>
);

export default Calendar;
