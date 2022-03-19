function nthFibo(n) {
  let prev = 0;
  let current = 1;
  if (n === 1) return prev;
  if (n === 2) return current;

  let i = 2;
  while (i < n) {
    [prev, current] = [current, prev + current];
    i++;
  }

  return current;
}

console.log(nthFibo(6));

// 1: 0
// 2: 1
// 3: 0+1=1
// 4: 1+1=2
// 5: 1+2=3
// 6: 2+3=5