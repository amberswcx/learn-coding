'use strict';

const login = '';

let message = (login === 'Сотрудник') ? 'Привет' :
  (login === 'Директор') ? 'Здравствуйте' :
    (login === '') ? 'Нет логина' :
      '';

console.log(message);