let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values)); // Hare,Krishna,:-O

function unique(arr) {
  return Array.from(new Set(arr));
}