let users = [
  {name: "John", age: 20, surname: "Johnson"},
  {name: "Pete", age: 18, surname: "Peterson"},
  {name: "Ann", age: 19, surname: "Hathaway"}
];

// console.log(users.sort((a, b) => a.name > b.name ? 1 : -1)); // по имени
// console.log(users.sort((a, b) => a.age > b.age ? 1 : -1)); // по возрасту

console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
  }
}