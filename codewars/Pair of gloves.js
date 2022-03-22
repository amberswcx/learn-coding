function numberOfPairs(gloves) {
  const colors = [];
  let result = 0;

  gloves.filter(color => {
    if (!colors.includes(color)) {
      result += Math.trunc(gloves.filter(col => (col === color)).length / 2);
      colors.push(color);
    }
  });

  return result;
}

// console.log(numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black'])); // 3
// console.log(numberOfPairs(['red', 'red'])); // 1
// console.log(numberOfPairs(['red', 'green', 'blue'])); // 0
console.log(numberOfPairs([
  'Maroon', 'Teal', 'Lime', 'Blue', 'Gray',
  'Navy', 'Black', 'Yellow', 'Yellow', 'Green',
  'Teal', 'Aqua', 'White', 'Navy', 'Blue',
  'Olive', 'Purple', 'Silver', 'Navy', 'Gray',
  'Silver', 'Gray', 'Aqua', 'Yellow', 'Lime',
  'Silver', 'Olive', 'White', 'Navy', 'Yellow',
  'Green', 'Lime', 'Teal', 'Gray', 'Fuchsia',
  'Maroon', 'Gray', 'Maroon', 'Purple', 'Purple',
  'Teal', 'White', 'Black', 'Maroon', 'Maroon',
  'White', 'Silver', 'Teal', 'Navy', 'Silver',
  'Teal', 'Black', 'White', 'Olive', 'Gray',
  'Black', 'Silver', 'White', 'Red', 'Silver',
  'Fuchsia', 'Teal', 'Maroon', 'Maroon', 'Aqua',
  'Gray', 'Maroon', 'Red', 'Red'
])); // 30