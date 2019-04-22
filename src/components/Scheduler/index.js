import React from 'react';
import { getHourArray, getWeekArray } from '../../shared/dates/helpers';

import TimeGrid from './TimeGrid';
import { Fragment as Column } from 'react';
import GridItem from './GridItem';
import Hour from './Hour';

const Scheduler = () => {
  return (
    <TimeGrid>
      <Column>
        <GridItem isFixed />
        <GridItem hour isFixed allDay>All Day</GridItem>
        {getHourArray().map((hour, i) => (
            <GridItem hour key={hour}><Hour>{i !== 0 ? hour : null}</Hour></GridItem>
        ))}
      </Column>
      {getWeekArray().map(day => (
          <Column key={day}>
            <GridItem isFixed>{day}</GridItem>
            <GridItem isFixed allDay/>
            {getHourArray().map((v, index) => <GridItem key={index} />)}
          </Column>
      ))}
    </TimeGrid>
  )
};

export default Scheduler;
