/*
// 1st decision
let [a, op, b] = parse("1.2 * 3.4");
console.log(a); // 1.2
console.log(op); // *
console.log(b); // 3.4

function parse(expr) {
  let arr = expr.match(/-?\d+(\.\d+)?/g);
  arr[2] = arr[1];
  arr[1] = expr.match(/[\+\-\*\/]/g).join('');
  return arr;
}
*/

// 2nd decision
let [a, op, b] = parse("1.2 * 3.4");
console.log(a); // 1.2
console.log(op); // *
console.log(b); // 3.4

function parse(expr) {
  let arr = expr.match(/-?(\d+(?:\.\d+)?)\s*([-+*/])\s*(-?\d+(?:\.\d+)?)/);
  arr.shift();
  return arr;
}