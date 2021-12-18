function combine(...args) {
  const result = Object.assign({},args[0]);

  for (let i = 1; i < args.length; i++) {
    for (let key in args[i]) {
      if (key in result) {
        result[key] += args[i][key];
      } else {
        result[key] = args[i][key];
      }
    }
  }

  return result;
}


console.log(combine({ a: 10, b: 20, c: 30 }, { a: 3, c: 6, d: 3 }));
// { a: 13, b: 20, c: 36, d: 3 }, { a: 3, c: 6, d: 3 }

/*console.log(combine({ a: 13, b: 20, c: 36, d: 3 }, { a: 5, d: 11, e: 8 }));
//{ a: 18, b: 20, c: 36, d: 14, e: 8 }, { a: 5, d: 11, e: 8 }*/

// console.log(combine(objA, objB, objC)) // { a: 18, b: 20, c: 36, d: 14, e: 8 })
// console.log(combine(objA, objC, objD)) // { a: 15, b: 20, c: 33, d: 11, e: 8 })
// console.log(combine({}, {}, {})) // {}
// console.log(combine(objA, objC, {})) // { a: 15, b: 20, c: 30, d: 11, e: 8 })
