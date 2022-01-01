console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));

function formatDate(date) {
  const today = new Date();
  let diff = today - date;

  if (Math.round(diff / 1000) <= 1) return 'прямо сейчас';
  if (Math.round(diff / 1000) <= 60) return Math.round(diff / 1000) + 'сек.назад';
  if (Math.round(diff / 1000) <= 3600) return Math.round(diff / 1000 / 60) + 'мин.назад';

  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear() % 100} ${date.getHours()}:${date.getMinutes()}`;
}