let calculator = {
  read() {
    this.a = +prompt('input 1st value:', 0); // number or 0
    this.b = +prompt('input 2nd value:', 0); // number or 0
  },
  sum() {
    return this.a + this.b;
  },
  mul() {
    return this.a * this.b;
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());