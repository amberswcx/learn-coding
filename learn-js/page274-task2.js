let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];
console.log(unique(strings)); // кришна, харе, :-O

/*
// 1st solution
function unique(arr) {
  for (let i = 0; i < strings.length; i++) {
    for (let j = i + 1; j < strings.length; j++) {
      if (arr[j] === arr[i]) {
        arr.splice(j, 1);
        i--;
      }
    }
  }
  return strings;
}
*/

// 2nd solution
function unique(arr) {
  let result = [];
  for (let i = 0; i < strings.length; i++) {
    if (!result.includes(arr[i])) {
        result.push(arr[i]);
    }
  }
  return result;
}