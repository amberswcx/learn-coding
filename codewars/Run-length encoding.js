var runLengthEncoding = function(str) {
  let current = str[0];
  let result = [];
  let i = 1;

  for (let j = 1; j <= str.length; j++) {
    if (str[j] === current) {
      i++;
    } else {
      result.push([i, current]);
      i = 1;
    }

    current = str[j];
  }
  return result;
};

console.log(runLengthEncoding('hello world!'));
//=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]

console.log(runLengthEncoding('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb'));
// => [[34,'a'], [3,'b']]