var whatTimeIsIt = function(angle) {
  if (angle < 30) angle += 360;
  return String(Math.trunc(angle / 30)).padStart(2, '0') + ':' + String(Math.floor((angle % 30) * 2)).padStart(2, '0');
}

// 12:00 = 0 degrees
// 03:00 = 90 degrees = (hours*60min)/2 => hours = (2*degrees)/60min or degrees/30

console.log(whatTimeIsIt(29));