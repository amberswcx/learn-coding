console.log(sumTo(1)) // 1
console.log(sumTo(2)) // 2 + 1 = 3
console.log(sumTo(3)) // 3 + 2 + 1 = 6
console.log(sumTo(4)) // 4 + 3 + 2 + 1 = 10
console.log(sumTo(100)) // 100 + 99 + ... + 2 + 1 = 5050

/*
// 1st solution
function sumTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i
  }
  return sum;
}
*/

/*
// 2nd solution
function sumTo(n) {
  sum = 0;
  if (n <= 1) {
    return 1;
  } else {
    sum = n + sumTo(n - 1);
    // x(n) = n + x(n-1) if n>1 else 1
  }

  return sum;
}
*/

/*

// 3rd solution
function sumTo(n) {
  return n * (n + 1) / 2;
}
*/

// 2nd solution extra
function sumTo(n) {
  if (n === 1) return 1;
  return n + sumTo(n - 1);
  // x(n) = n + x(n-1) if n>1 else 1
}