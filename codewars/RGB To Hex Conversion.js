function rgb(...rgb) {

  return rgb.map(value => convertHex(roundValue(value))).join('');

  function roundValue(x) {
    if (x > 255) return 255;
    if (x < 0) return 0;
    return x;
  }

  function convertHex(n) {
    const converted = n.toString(16).toUpperCase();
    return (converted.length === 1) ? '0' + converted : converted;
  }
}

console.log(rgb(255, 255, 255)) // returns FFFFFF
console.log(rgb(255, 255, 300)) // returns FFFFFF
console.log(rgb(0, 0, 0)) // returns 000000
console.log(rgb(148, 0, 211)) // returns 9400D3
console.log(rgb(224, 37, 6)) // returns E02506