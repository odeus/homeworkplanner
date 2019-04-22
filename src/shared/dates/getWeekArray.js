import eachDayOfInterval from "date-fns";
import startOfWeek from "date-fns";
import endOfWeek from "date-fns";
import format from "date-fns";

export default () => {
  const now = new Date();
  return eachDayOfInterval({ start: startOfWeek(now), end: endOfWeek(now) })
      .map(day => format(day, 'dd eee'));
}
