// ES6
const STEPS = 10;

STEPS = 20; // Error: read-only!

for (let i = 0; i < STEPS; i++) {

  console.log('step %i', i);
}

// ES5
var STEPS = 10;

STEPS = 20;

for (var i = 0; i < STEPS; i++) {

  console.log('step %i', i);
}
