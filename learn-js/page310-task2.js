let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// salaries = {}

function topSalary(salaries) {
  if (Object.entries(salaries).length === 0)
  return null;

  return Object
    .entries(salaries)
    .sort(([, salary1], [, salary2]) => salary2 - salary1)[0][0];
}

console.log(topSalary(salaries))