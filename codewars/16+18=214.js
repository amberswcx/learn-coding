function add(num1, num2) {
  const maxLength = Math.max(String(num1).length, String(num2).length);
  const str1 = String(num1).padStart(maxLength,'0').split('');
  const str2 = String(num2).padStart(maxLength,'0').split('');
  let result = '';

  for (let i = 0; i < maxLength; i++) {
    result += +str1[i] + +str2[i];
  }

  return +result;
}