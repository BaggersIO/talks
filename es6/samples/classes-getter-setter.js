//ES6
const PRIVATE_DATA = Symbol();

class Person {
  constructor({ firstName = 'John', lastName = 'Doe' }) {

    this[PRIVATE_DATA] = {
      firstName, lastName
    };
  }

  get firstName() {
    return this[PRIVATE_DATA].firstName;
  }

  get lastName() {
    return this[PRIVATE_DATA].lastName;
  }

  get fullName () {
    return `${this[PRIVATE_DATA].firstName} ${this[PRIVATE_DATA].lastName}`
  }
}

let peter = new Person({
  firstName: 'Peter',
  lastName: 'Müller'
});

//ES5
function Person (data) {

  Object.defineProperty(this, 'firstName', {
    get: function () {
      return data.firstName;
    }
  });

  Object.defineProperty(this, 'lastName', {
    get: function () {
      return data.lastName;
    }
  });

  Object.defineProperty(this, 'fullName', {
    get: function () {
      return data.fistName + ' ' + data.lastName;
    }
  });
}
