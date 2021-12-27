let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
console.log(aclean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

function aclean(arr) {
  let anagrams = new Map;
  arr.forEach(anagram => anagrams.set(anagram.toLowerCase().split('').sort().join(''), anagram));

  return Array.from(anagrams.values());
}

