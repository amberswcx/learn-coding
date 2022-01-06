console.log(factorial(5)) // 120

/*
function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
  // n! = n * (n-1)!
}
*/

// 2nd solution
function factorial(n) {
  return (n === 1) ? 1 : n * factorial(n - 1);
  /*
or
  return (n !== 1) ? n * factorial(n - 1) : 1;
  */
}