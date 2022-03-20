function getLengthOfMissingArray(arrayOfArrays) {
  let sortedArr;

  if (isEmpty(arrayOfArrays)) return 0;

  sortedArr = arrayOfArrays
    .map(arr => (isEmpty(arr)) ? -1 : arr.length)
    .sort((a, b) => a - b);

  for (let i = 0; i < sortedArr.length - 1; i++) {
    if (sortedArr[i + 1] - sortedArr[i] > 1) {
      return sortedArr[i] + 1;
    }
  }


  function isEmpty(arr) {
    return (!arr || arr.length === 0);
  }
}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));
console.log(getLengthOfMissingArray([[null], [null, null, null]]));
console.log(getLengthOfMissingArray(null));
console.log(getLengthOfMissingArray([[4, 2, 1, 2], [2, 4, 0, 2, 2], [],[1, 4, 3, 2, 4, 1], [3, 4, 3, 2, 2, 1, 0, 4], [4, 4, 2, 3, 4, 2, 4, 1, 0]]));