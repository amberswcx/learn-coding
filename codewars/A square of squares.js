var isSquare = function(n) {
  if (n < 0) return false;
  return Number.isInteger(n ** 0.5);
}