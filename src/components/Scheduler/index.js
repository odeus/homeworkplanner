import React from 'react';
import { getHourArray, getWeekArray, getWeekNumberString, getMonth } from '../../shared/dates/helpers';
import styled from 'styled-components';

import TimeGrid from './TimeGrid';
import { Fragment as Column } from 'react';
import GridItem from './GridItem';
import Hour from './Hour';
import Day from './Day';
import Toolbar from './Toolbar';

const Wrapper = styled.div`
  max-height: 100vh;
  overflow: hidden;
`;

const Scheduler = () => {
  return (
    <Wrapper>
      <Toolbar>{getMonth()}</Toolbar>
      <TimeGrid>
        <Column>
          <GridItem isFixed side bold>{getWeekNumberString()}</GridItem>
          <GridItem isFixed allDay side>All Day</GridItem>
          {getHourArray().map((hour, i) => (
              <GridItem hour side key={hour}><Hour>{i !== 0 ? hour : null}</Hour></GridItem>
          ))}
        </Column>
        {getWeekArray().map(day => (
            <Column key={day}>
              <GridItem isFixed day>
                <Day day={day.split(' ')}/>
              </GridItem>
              <GridItem isFixed allDay />
              {getHourArray().map((v, index) => <GridItem key={index} />)}
            </Column>
        ))}
      </TimeGrid>
    </Wrapper>
  )
};

export default Scheduler;
