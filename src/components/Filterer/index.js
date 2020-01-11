import React from 'react';

import Wrapper from './Wrapper';
import FilterButton from './FilterButton';

const filterer = () => (
    <Wrapper>
        <div>Sort by: </div>
        <FilterButton
            to="#"
            isActive={(match, location) => location.hash === ''}
        >
          All
        </FilterButton>
        <FilterButton
            to="#weekly"
            isActive={(match, location) => location.hash === '#weekly'}
        >
          Weekly
        </FilterButton>
        <FilterButton
            to="#deadlines"
            isActive={(match, location) => location.hash === '#deadlines'}
        >
          Deadlines
        </FilterButton>
    </Wrapper>
);

export default filterer;
