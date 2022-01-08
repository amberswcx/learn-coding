function strCount(obj) {
  let result = 0;

  for (let item in obj) {
    if (typeof obj[item] === 'string') {
      result++;
    } else if (typeof obj[item] === 'object') {
      result += strCount(obj[item])
    }
  }

  return result;
}

console.log(strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime", 2, 3, 4],
  fifth: null
}));
// returns 3