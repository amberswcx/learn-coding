function squareDigits(num) {
  let outputNum = '';
  for (let i of num.toString()) {
    outputNum += ((+i)**2).toString();
  }
  return +outputNum;
}