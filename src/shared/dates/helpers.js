import setHours from 'date-fns/setHours';
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import format from "date-fns/format";
import getISOWeek from 'date-fns/getISOWeek';
import getISOWeeksInYear from 'date-fns/getISOWeeksInYear';

export const getHourArray = () => {
  const now = new Date(2019, 0, 0, 0, 0, 0);
  const hours = [];
  for(let i = 0; i <= 23; i++) {
    hours.push(format(setHours(now, i), 'p'));
  }
  return hours;
};

export const getWeekArray = () => {
  const now = new Date();
  return eachDayOfInterval({ start: startOfWeek(now), end: endOfWeek(now) })
      .map(day => format(day, 'dd eee'));
};

export const getWeekNumberString = () => {
  const now = new Date();
  return `${getISOWeek(now)}/${getISOWeeksInYear(now)}`
};

export const getMonth = () => {
  const now = new Date();
  return format(now, 'MMMM yyyy')
};
