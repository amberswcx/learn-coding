function duplicateEncode(word) {
  let dublicates = [];
  let characters = [];

  word = word.toLowerCase();
  word.split('').forEach(character => {
    if (!characters.includes(character)) {
      characters.push(character);
    } else {
      dublicates.push(character);
    }
  });
  return word.split('')
             .map(character => character = (dublicates.includes(character)) ? ')' : '(')
             .join('');
}

console.log(duplicateEncode('din')); // "((("
console.log(duplicateEncode('recede')); // "()()()"
console.log(duplicateEncode('Success')); // ")())())"
console.log(duplicateEncode('(( @')); // "))(("