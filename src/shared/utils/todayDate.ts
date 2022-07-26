export function TodayDate() {
  const date = new Date();
  let monthToday = '' + (date.getMonth() + 1);
  let dayToday = '' + date.getDate();
  const yearToday = date.getFullYear();

  if (monthToday.length < 2) monthToday = '0' + monthToday;
  if (dayToday.length < 2) dayToday = '0' + dayToday;

  return [yearToday, monthToday, dayToday].join('-');
}
