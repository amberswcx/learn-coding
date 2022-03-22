function unluckyDays(year) {
  let blackFridays = 0;

  for (let i = 0; i < 12; i++) {
    if (new Date(year, i, 13).getDay() === 5) blackFridays++;
  }

  return blackFridays;
}

console.log(unluckyDays(2015)); // 3
console.log(unluckyDays(1986)); // 1