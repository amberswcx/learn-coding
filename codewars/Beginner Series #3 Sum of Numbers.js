/*// 1st decision

function getSum(a, b) {
  let sum = 0;

  if (a === b)
    return a;
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    sum += i;
  }

  return sum;
}*/

// 2nd decision

function getSum(a, b) {
  if (a === b)
    return a;
  return (Math.abs(a - b) + 1) * (a + b) / 2;
  // n*(a+b)/2 - sum of arithmetic progression (n - number)
}