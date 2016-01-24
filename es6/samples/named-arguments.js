// ES6
function foo ({ bar, baz = 'abc' }) {

  console.log('bar: ', bar);
  console.log('baz: ', baz);
}

foo ({
  bar: 123,
  baz: 'xyz'
});

// ES5
function foo (config) {

  config = config || {};

  config.baz = typeof config.baz === 'undefined'
    ? 'abc'
    : config.baz;

  console.log('bar: ', config.bar);
  console.log('baz: ', config.baz);
}

foo({
  bar: 123,
  baz: 'xyz'
});
