let user = {
  name: 'John',
  age: 30
};
console.log(count(user)); // 2

/*
function count(obj) {
  let counter = 0;
  for (let property in obj) {
    counter++;
  }
  return counter;
}
*/

function count(obj) {
  return Object.entries(obj).length; // or keys, or values
}