function bingo(ticket, win) {
  for (let item of ticket) {
    let [str, code] = item;
    if (str.split('').includes(String.fromCharCode(code))) win--;
  }
  if (win <= 0) return 'Winner!';
  return 'Loser!';
}

// 24 unique (!!!) and random numbers

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)) // loser
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 1)) // winner
console.log(bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3)) // loser
