function sentence(List) {
  List.sort(function(obj1, obj2) {
    return Object.keys(obj1)[0] - Object.keys(obj2)[0];
  })

  return List.reduce((str, current) => str + Object.values(current)[0] + ' ', '').trim();
}

const List = [
  {'4': 'dog'}, {'2': 'took'}, {'3': 'his'},
  {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
]
console.log(sentence(List)); // 'Vatsan took his dog for a spin'