import setHours from 'date-fns/setHours';
import eachDayOfInterval from "date-fns/eachDayOfInterval";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import format from "date-fns/format";
import getISOWeek from 'date-fns/getISOWeek';
import getISOWeeksInYear from 'date-fns/getISOWeeksInYear';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import startOfDay from 'date-fns/startOfDay';
import getHours from 'date-fns/getHours';
import addDays from 'date-fns/addDays';

/**
 * This function returns an array of all the localized hours in the day, starting from the startHour.
 * @param startAt
 * @returns {Array}
 */
export const getHourArray = (startAt = 0) => {
  const now = new Date(2019, 0, 0, 0, 0, 0);
  const hours = [];
  for(let i = startAt; i <= 23-startAt; i++) {
    hours.push(format(setHours(now, i), 'p'));
  }
  if(startAt !== 0) {
    for(let i = 24-startAt; i <= 23; i++) {
      hours.push(format(setHours(now, i), 'p'));
    }
    for(let i = 0; i < startAt; i++) {
      hours.push(format(setHours(now, i), 'p'));
    }
  }
  return hours;
};

/**
 * Returns an array of all the days in the current week, formatted in the form <day of the month> <weekday>.
 * @returns {Array}
 */
export const getWeekArray = () => {
  const now = new Date();
  return eachDayOfInterval({ start: startOfWeek(now), end: endOfWeek(now) })
      .map(day => format(day, 'dd eee'));
};

/**
 * This function gives you the current week out of the full weeks in the year.
 * @returns {string}
 */
export const getWeekNumberString = () => {
  const now = new Date();
  return `${getISOWeek(now)}/${getISOWeeksInYear(now)}`;
};

/**
 * This function gives you the current month and year, formatted in the form <fullMonth> <fullYear>.
 * @returns {string}
 */
export const getMonth = () => {
  const now = new Date();
  return format(now, 'MMMM yyyy')
};

/**
 * This function shows you if the given date (from the getWeekArray function) is the same as the current date.
 * @param date
 * @returns {boolean}
 */
export const isCurrentDay = (date) => format(new Date(), 'dd eee') === date;

/**
 * This function gives you the difference between the start of the day and the current time, in minutes.
 * Optionally offset by a starting hour.
 * @param startHour
 * @returns {number}
 */
export const getCurrentTimeInMinutes = (startHour = 0) => {
  const now = new Date();
  let relativeDate = startOfDay(now);
  if(getHours(now) < 24 && getHours(now) >= startHour) {
    relativeDate = setHours(startOfDay(now), startHour);
  } else {
    relativeDate = setHours(addDays(relativeDate, now), startHour);
  }
  return differenceInMinutes(now, relativeDate);
};
