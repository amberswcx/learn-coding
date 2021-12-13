/*
// 1st solution
function fakeBin(x) {
  x = x.replace(/[0-4]/g, '0');
  return x.replace(/[5-9]/g, '1');
}
*/

// 2nd solution
function fakeBin(x) {
  return x.replace(/[0-4]/g, '0').replace(/[5-9]/g, '1');
}

/*// not my solution
function fakeBin(x) {
  return x.replace(/\d/g, d => (d < 5) ? '0' : '1');
}*/
