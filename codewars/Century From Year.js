/*
// 1st solution
function century(year) {
  return (year % 100) ? (Math.floor(year / 100) + 1) : Math.floor(year / 100);
}
*/

// 2nd solution
function century(year) {
  return Math.ceil(year / 100);
}