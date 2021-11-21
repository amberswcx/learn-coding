/*// 1st decision

function countSheeps(arrayOfSheep) {
  sum = 0;

  for (let sheep of arrayOfSheep) {
    if (sheep === true)
      sum++;
  }

  return sum;
}*/

// 2nd decision

function countSheeps(arrayOfSheep) {
  return arrayOfSheep.filter(Boolean).length; // Boolean returns true for true and false for not true
  // Filter filters values by function Boolean (only true values)
}