/*
// 1st solution
function myLanguages(results) {

  const obj = {};
  const arr = [];

  for (let key in results) {
    if (results[key]>=60) {
      arr.push(results[key]);
      obj[results[key]] = key;
    }
  }
  return arr.sort((a,b)=>b-a).map(key => obj[key]);
}
*/

// 1st solution
function myLanguages(results) {
  return Object.keys(results).filter(key => results[key] >= 60).sort((a, b) => results[b]-results[a]);
}

console.log(myLanguages({"Hindi": 60, "Dutch": 93, "Greek": 71}));