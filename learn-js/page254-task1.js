function sumInput() {
  let result = [];

  do {
    let number = prompt('enter number: ');
    if (!isFinite(number) || number !== '' || number === null) break;

    result.push(+number);
  }
  while (true);

  return result.reduce((sum, x) => sum + x, 0);
}

sumInput();