function longest(s1, s2) {
  let s = s1 + s2;
  const letters = s.split('').sort();
  const result = [];
  result.push(letters[0]);
  let j = 0;
  for (let i = 1; i < letters.length; i++) {
    if (letters[i] !== result[j]) {
      j++;
      result[j] = letters[i];
    }

  }
  return result.join('');
}