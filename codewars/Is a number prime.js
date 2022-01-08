function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

//  prime number (or a prime) is
//  a natural number greater than 1
//  that has no positive divisors other than 1 and itself.

// console.log(isPrime(0)) // false
// console.log(isPrime(1)) // false
// console.log(isPrime(2)) // true
// console.log(isPrime(73)) // true
// console.log(isPrime(75)) // false
// console.log(isPrime(-1)) // false

// console.log(isPrime(3)) // true
// console.log(isPrime(5)) // true
// console.log(isPrime(7)) // true
// console.log(isPrime(41)) // true
// console.log(isPrime(5099)) // true

// console.log(isPrime(4)) // false
// console.log(isPrime(6)) // false
// console.log(isPrime(8)) // false
// console.log(isPrime(9)) // false
// console.log(isPrime(45)) // false
// console.log(isPrime(-5)) // false
// console.log(isPrime(-8)) // false
// console.log(isPrime(-41)) // false