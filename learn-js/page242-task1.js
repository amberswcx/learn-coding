truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) // "Вот, что мне хотело…"
truncate("Всем привет!", 20) // "Всем привет!"

function truncate(str, maxlength) {
  if (!str) return str; // проверка на пустую строку
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 1) + '…'; // … = 1 символ
  } else {
    return str;
  }
}
