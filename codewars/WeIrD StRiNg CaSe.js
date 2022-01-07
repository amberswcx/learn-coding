function toWeirdCase(str) {
  return str
    .split(' ')
    .map(word => word
      .split('')
      .map((letter, i) => (i % 2) ? letter.toLowerCase() : letter.toUpperCase())
      .join('')
    )
    .join(' ');
}

console.log(toWeirdCase("String"));//=> returns "StRiNg"
console.log(toWeirdCase("string"));//=> returns "StRiNg"
console.log(toWeirdCase("Weird string case"));//=> returns "WeIrD StRiNg CaSe"