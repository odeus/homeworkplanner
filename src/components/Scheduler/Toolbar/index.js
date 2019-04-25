import React from 'react';
import setWeek from 'date-fns/setWeek';
import getWeek from 'date-fns/getWeek';
import { formatMonth } from "../../../shared/dates/date";

import Wrapper from './Wrapper';
import ScrollButton from './ScrollButton';
import { ReactComponent as ArrowBack } from '../../../assets/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../../assets/arrow_forward.svg';

const toolbar = ({ date, setDate }) => {
  return (
      <Wrapper>
        <div>
          <ScrollButton
              onClick={() => setDate(setWeek(date, getWeek(date) - 1))}>
            <ArrowBack/>
          </ScrollButton>
          <ScrollButton
              onClick={() => setDate(setWeek(date, getWeek(date) + 1))}>
            <ArrowForward/>
          </ScrollButton>
        </div>
        <div>{formatMonth(date)}</div>
        <div>

        </div>

      </Wrapper>
  );
};

export default toolbar;
