/*
function dataReverse(data) {
  let str = data.join('');
  let arr = [];
  for (let i = 0; i < str.length; i += 8) {
    arr.push(str.slice(i, i + 8));
  }
  return arr.reverse().join('').split('').map(item=>+item);
}
*/

function dataReverse(data) {
  let arr = [];
  for (let i = 0; i < data.length; i += 8) {
    arr.push(data.slice(i, i + 8));
  }

  return arr.reverse().reduce((start, current) => start.concat(current), [])
}

console.log(dataReverse([1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]))
// [1,1,1,1,1,1,1,1,  0,0,0,0,0,0,0,0,  0,0,0,0,1,1,1,1,  1,0,1,0,1,0,1,0]
// =>
// [1,0,1,0,1,0,1,0,  0,0,0,0,1,1,1,1,  0,0,0,0,0,0,0,0,  1,1,1,1,1,1,1,1]

