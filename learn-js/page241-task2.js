function checkSpam(str) {
  if (!str) return str; // проверка на пустую строку
  return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx');
}