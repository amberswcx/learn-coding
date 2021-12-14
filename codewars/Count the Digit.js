function nbDig(n, d) {
  let count = 0;
  const digit = new RegExp(d, 'g');

  for (let k = 0; k <= n; k++) {
    count += (String(k ** 2).match(digit) || []).length;
  }

  return count;
}