var Alphabet = {
  BINARY: '01',
  OCTAL: '01234567',
  DECIMAL: '0123456789',
  HEXA_DECIMAL: '0123456789abcdef',
  ALPHA_LOWER: 'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};

function convert(input, source, target) {
  const sourceBase = source.length;
  const targetBase = target.length;
  let num = 0;
  let result = '';

  if (sourceBase !== 10) {
    const inputAlphabet = input.split('')
    const sourceAlphabet = source.split('');
    for (let i = 0; i < inputAlphabet.length; i++) {
      num += sourceAlphabet.findIndex(j => (j === inputAlphabet[i])) * sourceBase ** (inputAlphabet.length - i - 1);
    }
  } else {
    num = input;
  }

  while (true) {
    result = `${target[num % targetBase]}${result}`;
    num = Math.floor(num / targetBase);
    if (num < 1) break;
  }

  return result
}

// convert between numeral systems
console.log(convert("15", Alphabet.DECIMAL, Alphabet.BINARY)); // should return "1111"
console.log(convert("15", Alphabet.DECIMAL, Alphabet.OCTAL)); // should return "17"
console.log(convert("1010", Alphabet.BINARY, Alphabet.DECIMAL)); // should return "10"
console.log(convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL)); // should return "a"

// other bases
console.log(convert("0", Alphabet.DECIMAL, Alphabet.ALPHA)); // should return "a"
console.log(convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER)); // should return "bb"
console.log(convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL)); // should return "320048"
console.log(convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER)); // should return "SAME"