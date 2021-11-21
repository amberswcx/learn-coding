/*// 1st decision

function accum(s) {
  let result = s[0].toUpperCase();

  for (let i = 1; i < s.length; i++) {
    result += '-' + s[i].toUpperCase() + s[i].toLowerCase().repeat(i);
  }

  return result;
}*/

// 2nd decision

function accum(s) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    result.push(s[i].toUpperCase() + s[i].toLowerCase().repeat(i));
  }

  return result.join('-');
}