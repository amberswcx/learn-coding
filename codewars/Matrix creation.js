function getMatrix(number) {
  let matrix = [];
  for (let i = 0; i < number; i++) {
    matrix.push([])
    for (let j = 0; j < number; j++) {
      if (i === j) matrix[i].push(1)
      else matrix[i].push(0);
    }
  }
  return matrix;
}

console.log(getMatrix(1));
// [[1]]
console.log(getMatrix(2));
// [ [1,0],
//   [0,1] ]
console.log(getMatrix(5));
// [ [1,0,0,0,0],
//   [0,1,0,0,0],
//   [0,0,1,0,0],
//   [0,0,0,1,0],
//   [0,0,0,0,1] ]
