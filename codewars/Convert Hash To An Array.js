function convertHashToArray(hash) {
  return Object.entries(hash).sort(([name1,], [name2,]) => (name1 > name2) ? 1 : -1)
}

console.log(convertHashToArray({name: 'Jeremy', age: 24, role: 'Software Engineer'}))

// in = {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// out = [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]
// output array should be sorted alphabetically.