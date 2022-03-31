/*
function printNumbers(from, to) {

  let intervalID = setInterval(showNumber, 1000);

  function showNumber() {
    if (from <= to) {
      console.log(from);
      from++;
    } else {
      clearInterval(intervalID);
    }
  }
}
*/

function printNumbers(from, to) {

  let intervalID = setTimeout(showNumber, 1000);

  function showNumber() {
    if (from <= to) {
      console.log(from);
      from++;
      setTimeout(showNumber, 1000)
    } else {
      clearInterval(intervalID);
    }
  }
}

printNumbers(2, 10);