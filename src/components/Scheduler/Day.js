import React, { Fragment } from 'react';
import styled from 'styled-components';

const DayNumber = styled.span`
  font-size: 1.6rem;
  font-weight: bold;
`;

// Receives array with index 0, the number of the month and index 1 the day of the week
export default ({ day }) => (
    <Fragment>
      <DayNumber>{day[0]}</DayNumber>
      &nbsp;{day[1]}
    </Fragment>
);
