import React from 'react';
import { getMonth } from '../../../shared/dates/helpers';

import Wrapper from './Wrapper';
import ScrollButton from './ScrollButton';
import { ReactComponent as ArrowBack } from '../../../assets/arrow_back.svg';
import { ReactComponent as ArrowForward } from '../../../assets/arrow_forward.svg';

const toolbar = ({ week, setWeek }) => {
  return (
      <Wrapper>
        <div>
          <ScrollButton onClick={() => setWeek(week-1)}><ArrowBack/></ScrollButton>
          <ScrollButton onClick={() => setWeek(week+1)}><ArrowForward/></ScrollButton>
        </div>
        <div>{getMonth()}</div>
        <div>

        </div>

      </Wrapper>
  );
};

export default toolbar;
