function readNumber() {
  let result;
  do {
    result = prompt('enter number:');
  }
  while (!isFinite(result));

  // if Esc or Cancel return null
  if (result === null || result === '')
    return null;

  return +result;
}

readNumber();