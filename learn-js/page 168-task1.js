function multiplyNumeric(obj) {
  for (let key in obj) {
    // if (Number.isFinite(obj[key])) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);
console.log(menu);