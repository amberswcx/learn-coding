// // 1st solution
// function calculate(...argSet1) {
//   return function(...argSet2) {
//     return argSet1.reduce((a, b) => a + b, 0) + argSet2.reduce((a, b) => a + b, 0);
//   };
// }

// 2nd solution
function calculate(...argSet1) {
  return function(...argSet2) {
    return [...argSet1, ...argSet2].reduce((a, b) => a + b, 0);
  };
}

console.log(calculate(1)(1)); // should return 2
console.log(calculate(1, 1)(1)); // should return 3
console.log(calculate(1, 1)(1, -1)); // should return 2
console.log(calculate(2, 4)(3, 7, 1)); // should return 17