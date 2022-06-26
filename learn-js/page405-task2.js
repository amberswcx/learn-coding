function f(a) {
  console.log(a);
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);
f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

/*
function throttle(f, ms) {
  isCooldown = false;
  let argsBuffer;
  let thisBuffer;

  return function(...args) {

    argsBuffer = args;
    thisBuffer = this;

    if (isCooldown) return;

    isCooldown = true;
    setTimeout(() => f.apply(this, args) || f.apply(thisBuffer, argsBuffer), ms);
  };
}
*/

function throttle(f, ms) {
  isCooldown = false;
  let argsBuffer;
  let thisBuffer;

  function wrapper(...args) {

    if (isCooldown) {
      argsBuffer = args;
      thisBuffer = this;
      return;
    }

    f.apply(this, args);

    isCooldown = true;

    setTimeout(() => {
      isCooldown = false;
      if (argsBuffer) {
        wrapper.apply(thisBuffer, argsBuffer);
        thisBuffer = argsBuffer = 0;
      }
    }, ms);
  }

  return wrapper;
}

/*
function throttle(func, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    func.apply(this, arguments); // (1)
    isThrottled = true;
    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
*/
