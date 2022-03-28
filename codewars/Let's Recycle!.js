function recycle(array) {
  const output = [
    [], // 0: paper
    [], // 1: glass
    [], // 2: organic
    [] // 3: plastic
  ];

  for (obj of array) {
    pushType(obj.material);
    if ('secondMaterial' in obj) {
      pushType(obj.secondMaterial);
    }
  }

  function pushType(raw) {
    const listOfType = {
      'paper': 0,
      'glass': 1,
      'organic': 2,
      'plastic': 3
    };
    output[listOfType[raw]].push(obj.type);
  }

  return output;
}

input = [
  {'type': 'rotten apples', 'material': 'organic'},
  {'type': 'out of date yogurt', 'material': 'organic', 'secondMaterial': 'plastic'},
  {'type': 'wine bottle', 'material': 'glass', 'secondMaterial': 'paper'},
  {'type': 'amazon box', 'material': 'paper'},
  {'type': 'beer bottle', 'material': 'glass', 'secondMaterial': 'paper'}
];

console.log(recycle(input));