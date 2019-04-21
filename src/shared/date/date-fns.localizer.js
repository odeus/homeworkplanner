import dates from 'react-big-calendar/lib/utils/dates';
import { DateLocalizer } from 'react-big-calendar/lib/localizer';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import format from 'date-fns/format';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';

let dateRangeFormat = ({ start, end }, culture, local) =>
    local.format(start, 'P', culture) + ' — ' + local.format(end, 'P', culture);

let timeRangeFormat = ({ start, end }, culture, local) =>
    local.format(start, 'p', culture) + ' — ' + local.format(end, 'p', culture);

let timeRangeStartFormat = ({ start, end }, culture, local) =>
    local.format(start, 'p', culture) + ' — ';

let timeRangeEndFormat = ({ start, end }, culture, local) =>
    ' — ' + local.format(end, 'p', culture);

let weekRangeFormat = ({ start, end }, culture, local) =>
    local.format(start, 'MMMM dd', culture) +
    ' - ' +
    local.format(end, dates.eq(start, end, 'month') ? 'dd' : 'MMMM dd', culture);

export let formats = {
  dateFormat: 'dd',
  dayFormat: 'dd eeee',
  weekdayFormat: 'eeee',

  selectRangeFormat: timeRangeFormat,
  eventTimeRangeFormat: timeRangeFormat,
  eventTimeRangeStartFormat: timeRangeStartFormat,
  eventTimeRangeEndFormat: timeRangeEndFormat,

  timeGutterFormat: 'p',

  monthHeaderFormat: 'MMMM YYYY',
  dayHeaderFormat: 'PPPP',
  dayRangeHeaderFormat: weekRangeFormat,
  agendaHeaderFormat: dateRangeFormat,

  agendaDateFormat: 'PPPP',
  agendaTimeFormat: 'p',
  agendaTimeRangeFormat: timeRangeFormat,
};

export default (locales) => {
  return new DateLocalizer({
    formats,
    firstOfWeek: (culture) => {
      return getDay(startOfWeek(new Date(), { locale: locales[culture] }))
    },
    format: (value, formatString, culture) => {
      return format(new Date(value), formatString, {
        locale: locales[culture],
        awareOfUnicodeTokens: true
      })
    },
  })
}
