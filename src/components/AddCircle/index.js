import React from 'react';

import Wrapper from './Wrapper';
import Line from './Line';

export default ({ radius }) => (
    <Wrapper radius={radius}>
        <Line width="50%" height="3px" />
        <Line width="3px" height="50%" />
    </Wrapper>
);
