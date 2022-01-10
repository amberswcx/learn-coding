/*
// 1st solution
var rotateMatrix = arr => {
  const result = [];
  const reversedArr = arr.map(string => string.reverse())

  for (let i = 0; i < arr[0].length; i++) {
    result.push([])
    for (let j = 0; j < arr.length; j++) {
      result[i].push(reversedArr[j][i]);
    }
  }

  return result;
}
*/

// 2nd solution
var rotateMatrix = arr => {
  const result = [];

  for (let i = 0; i < arr[0].length; i++) {
    result.push([])
    for (let j = 0; j < arr.length; j++) {
      result[i].push(arr[j][arr[0].length - i - 1]);
    }
  }

  return result;
}

console.log(rotateMatrix([[-1, 4, 5],
                              [2, 3, 4]]))
/*
Output: {{ 5, 4},
         { 4, 3},
         {-1, 2}}
*/
