// ES6

[1, 2, 3].map(x => x * x * x);
// [1, 8, 27]

['a', 'b', 'c'].map(c => c.toUppercase());
// ['A', 'B', 'C']

['a', 'b', 'c'].map((val, index) => index);
// [0, 1, 2]

//ES5

[1, 2, 3].map(function (x) {
  return x * x * x:
});
// [1, 8, 27]

['a', 'b', 'c'].map(function (c) {
  return c.toUpperCase();
});
// ['A', 'B', 'C']

['a', 'b', 'c'].map(function (c, index) {
  return index;
});
// [0, 1, 2]
