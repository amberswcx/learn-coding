let regexp = /#([a-f0-9]{3}){1,2}\b/ig;
let str = "color: #3f3; background-color: #AA00ef; and: #abcd";
console.log(str.match(regexp));