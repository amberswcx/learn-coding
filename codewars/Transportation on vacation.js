/*
// 1st solution
function rentalCarCost(d) {
  if (d >= 7) {
    return d * 40 - 50;
  }
  if (d >= 3) {
    return d * 40 - 20;
  }
  return d * 40;
}
*/

// 2nd solution
function rentalCarCost(d) {
  return (d >= 7) ? (d * 40 - 50) : (d >= 3) ? (d * 40 - 20) : d * 40;
}