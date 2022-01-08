/*
// 1st solution
function getCard() {
  const bingo = {
    'B': {
      'start': 1, 'end': 15, 'number': 5
    }, 'I': {
      'start': 16, 'end': 30, 'number': 5
    }, 'N': {
      'start': 31, 'end': 45, 'number': 4
    }, 'G': {
      'start': 46, 'end': 60, 'number': 5
    }, 'O': {
      'start': 61, 'end': 75, 'number': 5
    }
  }
  let result = [];
  let uniqueNumbers = 0;

  for (let letter in bingo) {
    uniqueNumbers += bingo[letter].number;

    while (result.length < uniqueNumbers) {
      let num = Math.round(Math.random() * (bingo[letter].end - bingo[letter].start) + bingo[letter].start);
      if (!result.includes(letter + num)) {
        result.push(letter + num);
      }
    }
  }
  return result;
}
*/

// 2nd solution
function getCard() {
  let result = [];
  let uniqueNumbers = 0;

  getColumn(result, 'B', 1, 15, 5);
  getColumn(result, 'I', 16, 30, 5);
  getColumn(result, 'N', 31, 45, 4);
  getColumn(result, 'G', 46, 60, 5);
  getColumn(result, 'O', 61, 75, 5);

  function getColumn(arr, letter, start, end, num) {
    uniqueNumbers += num;

    while (result.length < uniqueNumbers) {
      let n = Math.round(Math.random() * (end - start) + start);
      if (!result.includes(letter + n)) {
        result.push(letter + n);
      }
    }

    return arr;
  }

  return result;
}

console.log(getCard());

// A Bingo card contains 24 unique (!!!) and random numbers according to this scheme:
// Within the columns the order of the numbers is random. !!!


// for (let i = 0; i < bingo[letter].number; i++) {
// result.push(letter + Math.round(Math.random() * (bingo[letter].end - bingo[letter].start) + bingo[letter].start));

// let num = Math.random() * (bingo[letter].end - bingo[letter].start);
// if (!result.includes(num)) {
//   result.push(Math.round(Math.random() * (bingo[letter].end - bingo[letter].start) + bingo[letter].start))
// }
// }