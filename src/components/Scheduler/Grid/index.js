import React, { useCallback, useState, useEffect } from 'react';
import {getHourArray,
  getWeekArray,
  getWeekNumberString,
  isCurrentDay,
  getCurrentTimeInMinutes } from "../../../shared/dates/helpers";

import FixedItem, {FixedSide} from "./GridItems/FixedItem";
import HourItem from "./GridItems/HourItem";
import DayItem from "./GridItems/DayItem";
import EmptyItem from "./GridItems/EmptyItem";
import TimeGrid from "./TimeGrid";
import Column from './Column';
import TimeIndicator from './TimeIndicator';

const grid = ({ beginAt, week }) => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const getScrollHeightFromNode = useCallback(node => {
    if(node !== null) setScrollHeight(node.scrollHeight);
  }, []);

  useEffect(() => {
    setCurrentTime(getCurrentTimeInMinutes(beginAt));
    let timeSetterInterval;
    const timeTimeout = setTimeout(() => {
      setCurrentTime(getCurrentTimeInMinutes(beginAt));
      timeSetterInterval = setInterval(() => {
        setCurrentTime(getCurrentTimeInMinutes(beginAt));
      }, 60000);
    }, 60000 - new Date().getSeconds()*1000);
    return () => {
      clearTimeout(timeTimeout);
      clearInterval(timeSetterInterval);
    }
  }, []);

  return (
      <TimeGrid>
        <TimeIndicator
            percentage={currentTime/(24*60)}
            scrollHeight={scrollHeight} />
        <Column ref={getScrollHeightFromNode}>
          <FixedSide bold>{getWeekNumberString(week)}</FixedSide>
          <FixedSide allDay>All Day</FixedSide>
          {getHourArray(beginAt).map((hour, i) => (
              <HourItem key={hour} hour={i !== 0 ? hour : null} />
          ))}
        </Column>
        {getWeekArray().map(day => (
            <Column key={day} currentDay={isCurrentDay(day)}>
              <DayItem day={day} isFixed />
              <FixedItem allDay />
              {getHourArray(beginAt).map((v, index) => <EmptyItem key={index} />)}
            </Column>
        ))}
      </TimeGrid>
  );
};

export default grid;
