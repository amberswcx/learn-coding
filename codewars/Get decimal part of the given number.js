/*
// 1st solution
function getDecimal(n) {
  return Math.abs(n) - Math.abs(Math.trunc(n));
}
*/

// 2nd solution
function getDecimal(n) {
  return Math.abs(n % 1);
}
