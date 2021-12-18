function mergeArrays(arr1, arr2) {
  const arr = arr1.concat(arr2);

  if (arr.length === 0) return [];
  arr.sort((a, b) => a - b);

  const result = [arr[0]];
  let current = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== current) {
      result.push(arr[i]);
      current = arr[i];
    }
  }

  return result;
}
