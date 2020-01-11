import React from 'react';
import setWeek from 'date-fns/setWeek';
import getWeek from 'date-fns/getWeek';
import { formatMonth, weekStart } from '../../../shared/dates/date';

import Wrapper from './Wrapper';
import * as Button from './Buttons';
import ScrollButtons from './ScrollButtons';
import { ReactComponent as ArrowBack } from '../../../assets/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../../assets/arrow_forward.svg';

const toolbar = ({ date, setDate }) => (
    <Wrapper>
        <ScrollButtons>
            <Button.Scroll
                onClick={() => setDate(setWeek(date, getWeek(date) - 1))}
            >
                <ArrowBack />
            </Button.Scroll>
            <Button.Scroll
                onClick={() => setDate(setWeek(date, getWeek(date) + 1))}
            >
                <ArrowForward />
            </Button.Scroll>
        </ScrollButtons>
        <div>{formatMonth(date)}</div>
        <Button.Today
            onClick={() => setDate(weekStart(new Date()))}
        >
          Today
        </Button.Today>
    </Wrapper>
);

export default toolbar;
