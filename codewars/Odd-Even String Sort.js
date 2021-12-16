function sortMyString(s) {
  let group1 = '',
      group2 = '';
  for (let i = 0; i < s.length; i++) {
    if (i % 2 === 0) {
      group1 += s[i];
    } else {
      group2 += s[i];
    }
  }

  return group1 + ' ' + group2;
}

console.log(sortMyString('CodeWars'));