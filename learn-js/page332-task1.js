let user = {
  name: "Василий Иванович",
  age: 35
};

let userJSON = JSON.stringify(user);
console.log(userJSON);

let userString = JSON.parse(userJSON);

console.log(userString);