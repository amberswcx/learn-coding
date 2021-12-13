/*
// 1st solution
function numberToString(num) {
  return num.toString();
}
*/

/*
// 2nd solution
function numberToString(num) {
  return num + '';
}
*/

// 3rd solution
function numberToString(num) {
  return num.toFixed(0);
}

/*
// not my solutions:
function numberToString(num) {
  return String(num);
}

const numberToString = num => `${num}`;
*/
