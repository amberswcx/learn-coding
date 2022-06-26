let f = debounce(console.log, 1000);
f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)

/*
function debounce(f, delay) {
  let last = 0;
  const start = new Date();
  return function(...args) {
    const end = new Date();

    if (end - start - last >= delay) {
      last = end - start;
      return f(args);
    }
  };
}
*/

function debounce(f, delay) {
  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, delay)
  };
}