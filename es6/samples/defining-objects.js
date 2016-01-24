// ES6
let obj = {
  foo: 1300,
  bar: 37,
  baz() {

    return this.foo + this.bar;
  }
};

console.log(obj.baz());

// ES5
let obj = {
  foo: 1300,
  bar: 37,
  baz: function baz () {

    return this.foo + this.bar;
  }
};

console.log(obj.baz());
