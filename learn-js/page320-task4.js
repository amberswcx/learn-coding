let date = new Date(2015, 0, 2);
console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

/*
function getDateAgo(date, days) {
  let dateAgo = new Date(date.getFullYear(date), date.getMonth(date), date.getDate(date) - days);
  dateAgo.setHours(date.getHours() + 4); // Izhevsk +4h
  return dateAgo.getDate();
}
*/

function getDateAgo(date, days) {
  let dateAgo = new Date(date);
  dateAgo.setDate(date.getDate()-days)
  return dateAgo.getDate(); // no need to change +4 UTC
}