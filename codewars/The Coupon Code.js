/*
// 1st solution
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  if (enteredCode !== correctCode) return false;
  return (new Date(currentDate) <= new Date(expirationDate));
}
*/

// 2nd solution
const checkCoupon = (enteredCode, correctCode, currentDate, expirationDate) => (enteredCode !== correctCode) && (new Date(currentDate) <= new Date(expirationDate));


console.log(checkCoupon('123', '123', 'September 5, 2014', 'October 1, 2014')); // true
console.log(checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014')); // false