const table = document.body.firstElementChild;

let i = 0;

for (let row of table.rows) {
  i++;
  let j = 0;

  for (let cell of row.cells) {
    j++;
    if (i === j) {
      cell.style.backgroundColor = 'red';
    }
  }
}