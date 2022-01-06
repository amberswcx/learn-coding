let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

/*
// 1st solution
function printList(list) {
  while (true) {
    if ('value' in list && list.next !== null) {
      console.log(list.value);
      list = list.next;
    } else {
      console.log(list.value);
      break;
    }
  }
}
*/

/*
// 2nd solution
function printList(list) {
  if (list.next === null) {
    console.log(list.value);
  } else {
    console.log(list.value);
    printList(list.next);
  }
}
*/


/*
// 1st solution
function printList(list) {
  let obj = list;

  if (obj.next) {
    printList(obj.next)
  }
  console.log(obj.value);
}
*/

// 2nd solution
function printList(list) {
  let obj = list;
  let arr = [];

  while (obj) {
    arr.push(obj.value);
    obj = obj.next;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}


/*
// 2nd solution extra
function printList(list) {
  let obj = list;
  if (obj) {
    console.log(obj.value);
    printList(obj.next)
  }
}
*/

/*
// 2nd solution extra 2
function printList(list) {
  let obj = list;

  console.log(obj.value);
  if (obj.next) {
    printList(obj.next)
  }
}
*/

printList(list);