import React, { Component } from 'react';
import Scheduler from "../../components/Scheduler";

import Wrapper from './Calendar';

class Calendar extends Component {
  render() {
    return (
        <Wrapper>
          <Scheduler beginAt={6}/>
        </Wrapper>
    )
  }
}

export default Calendar;
