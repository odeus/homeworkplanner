import React, { useCallback, useState, useEffect } from 'react';
import {
    timeInMinutes, weekString, getHourArray, daysOfWeek, isCurrentDay,
} from '../../../shared/dates/date';

import FixedItem, { FixedSide } from './GridItems/FixedItem';
import HourItem from './GridItems/HourItem';
import DayItem from './GridItems/DayItem';
import EmptyItem from './GridItems/EmptyItem';
import TimeGrid from './TimeGrid';
import Column from './Column';
import TimeIndicator from './TimeIndicator';

const Grid = ({ beginAt, date }) => {
    const [scrollHeight, setScrollHeight] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const getScrollHeightFromNode = useCallback((node) => {
        if (node !== null) setScrollHeight(node.scrollHeight);
    }, []);

    useEffect(() => {
        setCurrentTime(timeInMinutes(beginAt));
        let timeSetterInterval;
        const timeTimeout = setTimeout(() => {
            setCurrentTime(timeInMinutes(beginAt));
            timeSetterInterval = setInterval(() => {
                setCurrentTime(timeInMinutes(beginAt));
            }, 60000);
        }, 60000 - new Date().getSeconds() * 1000);
        return () => {
            clearTimeout(timeTimeout);
            clearInterval(timeSetterInterval);
        };
    }, [beginAt]);

    return (
        <TimeGrid>
            <TimeIndicator
                percentage={currentTime / (24 * 60)}
                scrollHeight={scrollHeight}
            />
            <Column noborder ref={getScrollHeightFromNode}>
                <FixedSide bold>{weekString(date)}</FixedSide>
                <FixedSide allDay>All Day</FixedSide>
                {getHourArray(beginAt).map((hour, i) => (
                    <HourItem key={hour} hour={i !== 0 ? hour : null} />
                ))}
            </Column>
            {daysOfWeek(date).map((day) => (
                <Column key={day.formatted} currentDay={isCurrentDay(new Date(), day.date)}>
                    <DayItem day={day.formatted} isFixed />
                    <FixedItem allDay />
                    {getHourArray(beginAt).map((v, index) => <EmptyItem key={index} />)}
                </Column>
            ))}
        </TimeGrid>
    );
};

export default Grid;
