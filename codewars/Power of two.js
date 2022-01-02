/*
function isPowerOfTwo(n) {
  if (n === 0) return false;

  while (n % 2 === 0) {
    n = n / 2;
  }

  return (n <= 1);
}
*/

function isPowerOfTwo(n) {
  return Number.isInteger(Math.log2(n))
}

console.log(isPowerOfTwo(0)) // -> true
console.log(isPowerOfTwo(1024)) // -> true
console.log(isPowerOfTwo(4096)) // -> true
console.log(isPowerOfTwo(333)); // false
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false

// 1024 => 512 => 256 => 128 => 64 => 32 => 16 => 8 => 4 => 2