/*
function getSecondsToTomorrow() {
  const today = new Date();
  return 86400 - (today.getHours() * 3600 + today.getMonth() * 60 + today.getSeconds());
}
*/

function getSecondsToTomorrow() {
  const today = new Date();
  const tomorrow = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
  return Math.round((tomorrow - today) / 1000);
}

console.log(getSecondsToTomorrow()); // if now 23:00 then 3600