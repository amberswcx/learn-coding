function sum(x) {
  let sum = x;

  function func(next) {
    sum += next;
    return func; // возвращает функцию, не вызывая ее столько раз, сколько будет необходимо
  }

  func.toString = function() {
    return sum; // при использовании в качестве числа или строки, метод возвращает число
    // вместо этого можно использовать Symbol.toPrimitive или valueOf
  }

  return func; // возвращает функцию, не вызывая ее
}

console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6) // ; // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6)
console.log(sum(6)(-1)(-2)(-3) == 0)
console.log(sum(0)(1)(2)(3)(4)(5) == 15)