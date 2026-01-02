// Weekday Finder
// Given a string date in the format YYYY-MM-DD, return the day of the week.

// Valid return days are:

// "Sunday"
// "Monday"
// "Tuesday"
// "Wednesday"
// "Thursday"
// "Friday"
// "Saturday"
// Be sure to ignore time zones.

function getWeekday(dateString) {
  console.log(dateString);
  const date = new Date(dateString);
  console.log(date.getDay());
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return days[date.getUTCDay()];
}

getWeekday('1111-11-11');
