//ES6

'This is amazing'.startsWith('This');
// true

'This is amazing'.endsWith('amazing');
// true

'This is amazing'.contains('is');
// true

'This is amazing'.repeat(1337);
// This is amazing.This is amazing. ....


//ES5

'This is amazing'.match(/^This/);
// true

'This is amazing'.match(/amazing$/);
// true

'This is amazing'.match(/is/);
// true

new Array(1337).join('This is amazing');
// This is amazing.This is amazing. ....
