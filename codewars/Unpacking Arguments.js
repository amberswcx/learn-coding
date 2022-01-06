function spread(func, args) {
  return func(...args);
}

// spread(someFunction, [1, true, "Foo", "bar"])
console.log(spread(function(x, y) {return x + y}, [1,2]));