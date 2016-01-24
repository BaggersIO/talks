// ES6
function foo () {

  let bar = 123;

  if (bar === 123) {

    let baz = 'abc';
  }

  console.log(bar);
  console.log(baz); // Reference Error
}

// ES5
function foo () {

  var bar = 123;

  if (bar === 123) {

    var baz = 'abc';
  }

  console.log(bar);
  console.log(baz); // This works, but it's crap ;)  
}
