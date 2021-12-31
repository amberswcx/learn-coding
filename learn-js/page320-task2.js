let date = new Date(2012, 0, 3); // 3 января 2012 года
console.log(getWeekDay(date)); // нужно вывести "ВТ"

/*
function getWeekDay(date) {
  const WEEKDAYS = {
    0: 'ВС',
    1: 'ПН',
    2: 'ВТ',
    3: 'СР',
    4: 'ЧТ',
    5: 'ПТ',
    6: 'СБ'
  }
  return WEEKDAYS[date.getDay()];
}
*/

function getWeekDay(date) {
  const WEEKDAYS = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']

  return WEEKDAYS[date.getDay()];
}