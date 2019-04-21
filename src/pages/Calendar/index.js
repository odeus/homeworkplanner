import React, { Component } from 'react';
import dateFnsLocalizer from '../../shared/date/date-fns.localizer'
import en from 'date-fns/locale/en-GB';
import nl from 'date-fns/locale/nl';

import BigCalendar from 'react-big-calendar';

const localizer = dateFnsLocalizer({ en, nl });

class Calendar extends Component {
  render() {
    return (
        <div>
          {/*Calendar*/}
          <BigCalendar
            localizer={localizer}
            events={[]}
            startAccessor="start"
            endAccessor="end"
            // culture="nl"
          />
        </div>
    )
  }
}

export default Calendar;
