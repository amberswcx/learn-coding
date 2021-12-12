function Calculator() {
  this.read = function() {
    this.a = +prompt('input 1st value:', 0); // number or 0
    this.b = +prompt('input 2nd value:', 0); // number or 0
  };
  this.sum = function() {
    return this.a + this.b;
  };
  this.mul = function() {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();
alert('Sum=' + calculator.sum());
alert('Mul=' + calculator.mul());