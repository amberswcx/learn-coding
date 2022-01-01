/*
function getSecondsToday() {
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  return Math.floor((Date.now() - today.getTime()) / 1000);
}
*/

function getSecondsToday() {
  let today = new Date();

  return today.getHours() * 3600 + today.getMonth() * 60 + today.getSeconds();
}

console.log(getSecondsToday()); // if 10:00 then 36000 (3600 * 10)