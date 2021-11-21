/*// 1st decision

function positiveSum(arr) {
  let sum = 0;

  for (let i of arr) {
    if (i > 0)
      sum += i;
  }

  return sum;
}*/

// 2nd decision

function positiveSum(arr) {
  let sum = 0;

  arr.forEach(elem => {
    if (elem > 0) sum += elem
  })

  return sum;
}