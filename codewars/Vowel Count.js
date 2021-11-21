/*// 1st decision

function getCount(str) {
  var vowelsCount = 0;

  for (let i of str) {
    if (i === 'a' || i === 'e' || i === 'i' || i === 'o' || i === 'u')
      vowelsCount++;
  }

  return vowelsCount;
}*/

// 1st decision

function getCount(str) {
  return vowelsCount = (str.match(/[aeiou]/g) || []).length; // if no vowels then no array => need empty array for length function
}