/*
function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;

  counter.set = function(value) {
    return counter.count = value;
  };

  counter.decrease = function() {
    return counter.count--;
  }

  return counter;
}
*/

function makeCounter() {
  let count = 0;

  function counter() {
    return count++;
  }

  // counter.set = function(value) {
  //   return count = value;
  // };
  counter.set = (value) => count = value;

  // counter.decrease = function() {
  //   return count--;
  // }
  counter.decrease = () => count--;

  return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
counter.set(13) // 13
console.log(counter()); // 13
counter.decrease(); // 13
counter.decrease(); // 12
counter.decrease(); // 11
console.log(counter()); // 11