console.log(getMaxSubSum([-1, 2, 3, -9])) // 2 + 3 = 5
console.log(getMaxSubSum([2, -1, 2, 3, -9])) // 2 + -1 + 2 + 3 = 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])) // 11 = 11
console.log(getMaxSubSum([-2, -1, 1, 2])) // 1 + 2 = 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])) // 100 = 100
console.log(getMaxSubSum([1, 2, 3])) // 1 + 2 + 3 = 6
console.log(getMaxSubSum([-1, -2, -3])) // = 0

function getMaxSubSum(arr) {
  let currentSum = 0;
  let maxSum = 0;

  for (let item of arr) {
    currentSum += item;
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum < 0) currentSum = 0;
  }

  return maxSum;
}