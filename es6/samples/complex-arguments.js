//ES6

//                URL  OPTIONS          MORE SUFF
function request (url, {method = 'GET'}, ...padding) {

  console.log('url: %s', url);
  console.log('method: %s', method);
  console.log('more stuff: ', padding);
}

request('http://example.org', {}, 1, 2, 3);

// ES5
function request (url, options) {

  options = options || {};

  options.method =
    typeof options.method === 'undefined'
    ? 'GET'
    : options.method;

  var padding = Array.prototype.splice.call(arguments, 2);

  console.log('url: %s', url);
  console.log('method: %s', options.method);
  console.log('more stuff: ', padding);
}

request('http://example.org', {}, 1, 2, 3);
