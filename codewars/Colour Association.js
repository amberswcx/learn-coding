/*
// 1st solution for Node 12+

function colourAssociation(array) {
  return array.map(item => Object.fromEntries([item]));
}
*/

// 2nd solution
function colourAssociation(array) {
  return array.map(function(item) {
    const obj = Object.create({});
    obj[item[0]] = item[1];
    return obj;
  });
}