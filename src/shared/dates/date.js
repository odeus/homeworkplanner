import format from 'date-fns/format';
import setHours from 'date-fns/setHours';
import eachDayOfInterval from 'date-fns/eachDayOfInterval';
import startOfWeek from 'date-fns/startOfWeek';
import endOfWeek from 'date-fns/endOfWeek';
import getISOWeek from 'date-fns/getISOWeek';
import startOfDay from 'date-fns/startOfDay';
import addDays from 'date-fns/addDays';
import differenceInMinutes from 'date-fns/differenceInMinutes';
import getISOWeeksInYear from 'date-fns/getISOWeeksInYear';
import isSameDay from 'date-fns/isSameDay';

/**
 * This function returns an array of all the localized hours in the day, starting from the startHour.
 * @param {number} startAt
 * @returns {Array}
 */
export const getHourArray = (startAt) => {
    const beginOfYear = new Date(2019, 0, 0, 0, 0, 0);
    const hours = [];
    for (let i = startAt; i <= 23 - startAt; i++) {
        hours.push(format(setHours(beginOfYear, i), 'p'));
    }
    if (startAt !== 0) {
        for (let i = 24 - startAt; i <= 23; i++) {
            hours.push(format(setHours(beginOfYear, i), 'p'));
        }
        for (let i = 0; i < startAt; i++) {
            hours.push(format(setHours(beginOfYear, i), 'p'));
        }
    }
    return hours;
};

/**
 * Returns an array of all the days in the current week, formatted in the form <day of the month> <weekday>.
 * @param {Date} date
 * @returns {Array}
 */
export const daysOfWeek = (date) => eachDayOfInterval({ start: startOfWeek(date), end: endOfWeek(date) })
    .map((day) => ({
        formatted: format(day, 'dd eee'),
        date: day,
    }));

/**
 * Gives you the start of the week of a given date
 * @param {Date} date;
 * @returns {Date}
 */
export const weekStart = (date) => startOfWeek(date);

/**
 * This function gives you the current week out of the full weeks in the year
 * @param {Date} date
 * @returns {string}
 */
export const weekString = (date) => `${getISOWeek(date)}/${getISOWeeksInYear(date)}`;

/**
 * Returns the current month in a <MONTH> <YEAR> format
 * @param {Date} date
 * @returns {string}
 */
export const formatMonth = (date) => {
    if (endOfWeek(date).getMonth() !== startOfWeek(date).getMonth()) return `${format(startOfWeek(date), 'MMMM yyyy')} - ${format(endOfWeek(date), 'MMMM yyyy')}`;
    return format(startOfWeek(date), 'MMMM yyyy');
};

/**
 * This function shows you if the given date is the same as the current date.
 * @param {Date} date
 * @param {Date} date2
 * @returns {boolean}
 */
export const isCurrentDay = (date, date2) => isSameDay(date, date2);

/**
 * This function gives you the difference between the start of the day and the current time, in minutes.
 * Optionally offset by a starting hour.
 * @param {Date} date
 * @param {number} startHour
 * @returns {number}
 */
export const timeInMinutes = (startHour = 0, date = new Date()) => {
    let relativeDate = startOfDay(date);
    if (date.getHours() < 24 && date.getHours() >= startHour) {
        relativeDate = startOfDay(date).setHours(startHour);
    } else {
        relativeDate = addDays(relativeDate, date).setHours(startHour);
    }
    return differenceInMinutes(date, relativeDate);
};
