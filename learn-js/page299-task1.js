let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
console.log(sumSalaries(salaries)); // 650

/*function sumSalaries(salaries) {
  let sum = 0;
  /!*for (let [name, salary] of Object.entries(salaries)) {*!/
  for (let salary of Object.values(salaries)) {
    sum += salary;
  }
  return sum;
}*/

function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, current) => sum + current, 0);
}