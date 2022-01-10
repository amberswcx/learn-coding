function nextPrime(n) {
  n++;

  while (!isPrime(n)) {
    n++;
  }

  function isPrime(num) {
    if (num <= 1) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  return n;
}

console.log(nextPrime(2971))