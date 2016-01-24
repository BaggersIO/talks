// ES6
function foo () {

  return {
    baz: 123,
    bar: 'abc'
  };
}

let {baz} = foo();

console.log('baz: %i', baz);

// Or get all by
let all = foo();

console.log(all);

// ES5
function foo () {

  return {
    baz: 123,
    bar: 'abc'
  };
}

var values = foo();

console.log('baz: %i', values.baz);
