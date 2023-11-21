/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Day {
  MONDAY ='Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY= 'Thursday',
  FRIDAY= 'Friday',
  SATURDAY='Saturday',
  SUNDAY= 'Sunday'
}

function isWeekend(day:Day):boolean {
  if (day === Day.SATURDAY || day === Day.SUNDAY) {
    return true;
  }
  return false;
}