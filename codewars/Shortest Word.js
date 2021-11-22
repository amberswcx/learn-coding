function findShort(s) {
  const words = s.split(' ');
  return (words.sort((a, b) => a.length - b.length))[0].length;
}