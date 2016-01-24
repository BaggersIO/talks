//ES6
function welcomeTpl ({
  first: 'John',
  last: 'Doe'
}) {

  return `Welcome ${first} ${last}`;
}

function blogPostTpl({
  subject: 'Hello World!',
  body: 'Lorem ipsum dolar sit amet.'
}) {

  return `
  <div>
    <h1>${subject}</h1>
    <p>${body}</p>
  </div>
  `;
}

//ES5
function welcomeTpl (first, last) {

  return 'Welcome ' + first + ' ' + last;
}

function blogPostTpl (subject, body) {

  return '<div>' +
   '<h1>' + subject + '</h1>' +
   '<p>' + body + '</p>' +
   '</div>'
}
