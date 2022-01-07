var countBits = function(n) {
  let str = n.toString(2);

  return str.split('').reduce((sum, current) => sum + +current, 0);
}

console.log(countBits(1234));