function findMissing(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    if (arr1[i] !== arr2[i]) {
      if (arr1.length > arr2.length)
        return arr1[i];
      else
        return arr2[i];
    }
  }
}