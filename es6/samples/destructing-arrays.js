// ES6
let [x, y, z] = ['a', 'b', 'c'];

console.debug(
  x, // 'a'
  y, // 'b'
  z  // 'c'
);

let [first, second, ...padding] = [1, 2, 3, 4, 5, 6];

console.debug(
  first,  // 1
  second, // 2
  padding // [3, 4, 5, 6]
);

// ES5
var x = 'a';
var y = 'b';
var z = 'c';

console.debug(
  x, // 'a'
  y, // 'b'
  z  // 'c'
);

var first = 1;
var second = 2;
var padding = [3, 4, 5, 6];

console.debug(
  first,  // 1
  second, // 2
  padding // [3, 4, 5, 6]
);
