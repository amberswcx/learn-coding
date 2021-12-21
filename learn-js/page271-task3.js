let calc = new Calculator;
console.log(calc.calculate("3 - 7"));

function Calculator() {
  this.calculate = function(str) {
    [a, operator, b] = str.split(' ');

    if (!this.method[operator] || isNaN(a) || isNaN(b)) return NaN; // check for errors!

    return this.method[operator](a, b);
  }

  this.method = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b
  }

  this.addMethod = function(name, func) {
    this.method[name] = func;
  }
}

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
console.log(result); // 8

