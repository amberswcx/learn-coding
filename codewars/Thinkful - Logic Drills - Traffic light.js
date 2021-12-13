/*
// 1st solution
function updateLight(current) {
  switch (current) {
    case'green':
      return 'yellow';
      break;
    case 'yellow':
      return 'red';
      break;
    case 'red':
      return 'green';
      break;
  }
}
*/

// 2nd solution
function updateLight(current) {
  const change = {
    'green': 'yellow',
    'yellow': 'red',
    'red': 'green'
  }
  return change[current];
}