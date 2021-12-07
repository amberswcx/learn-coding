// 1st decision
// let regexp = /-?\d+\.?(\d?)+/g;
// let str = "-1.5 0 2 -123.4.";
// console.log(str.match(regexp));

// 2nd decision
let regexp = /-?\d+(\.\d+)?/g;
let str = "-1.5 0 2 -123.4.";
console.log(str.match(regexp));