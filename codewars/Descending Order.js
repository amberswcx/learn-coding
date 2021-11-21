// 1st decision

function descendingOrder(n) {
  let arr = String(n).split('');
  console.log(arr);
  arr.sort((a, b) => +b - +a);
  return +arr.join('');
}