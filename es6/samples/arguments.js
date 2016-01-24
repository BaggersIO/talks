// ES6
function foo (bar, baz = 'abc') {

  console.log('bar: ', bar);
  console.log('baz: ', baz);
}

foo(); // undefined, 'abc'
foo(123); // 123, 'abc'
foo(123, 'xyz'); // 123, 'xyz'

// ES5
function foo (bar, baz) {

  baz = typeof baz === 'undefined'
    ? 'abc'
    : baz;

  console.log('bar: ', bar);
  console.log('baz: ', baz);
}

foo(); // undefined, 'abc'
foo(123); // 123, 'abc'
foo(123, 'xyz'); // 123, 'xyz'
