// ES6
let person = {
  name: 'Peter',
  surname: 'Müller',
  address: 'JavaScript Av. 123a',
  city: 'Nuremberg'
}

let {name, surname} = person;

console.log(
  name,
  surname
); // Peter Müller

let {
  address: street,
  city,
} = person;

console.log('%s, %s',
  street,
  city,
); // JavaScript Av. 123a Nuremberg
