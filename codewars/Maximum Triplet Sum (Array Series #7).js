console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4])) // ==> return (18) [8, 6, 4]

function maxTriSum(numbers) {
  numbers.sort((a, b) => b - a);
  let duplicate = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] === duplicate) {
      numbers.splice(i, 1);
      i--;
    } else {
      duplicate = numbers[i];
    }
  }
  return numbers[0] + numbers[1] + numbers[2];
}

// use Set for delete duplicates!
// use [a,b,c,...rest] for use first 3 items!