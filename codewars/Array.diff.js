function arrayDiff(a, b) {
  let result = [];

  for (let item of a) {
    if (!b.includes(item)) result.push(item);
  }

  return result;
}

console.log(arrayDiff([1, 2], [1])) // [2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])) // [1,3]
console.log(arrayDiff([1, 2, 3], [1, 2])) // [3]