// console.log(fib(3)) // 2
// console.log(fib(7)) // 13
console.log(fib(77)) // 5527939700884757

// f(n) = f(n - 1) + f(n - 2) => f(n-2) = f - f(n-1)
// 1 1 2 3 5 8 13 21 ...

/*
// 1st solution
function fib(n) {
  let i = 1;
  let j = 1;
  let count = 2;
  while (count < n) {
    [j, i] = [i, i + j]
    count++;
  }
  return i;
}
*/

/*
// 2nd solution
function fib(n) {
  return (n <= 1) ? n : fib(n - 1) + fib(n - 2);
}
*/
