// ES6
class Animal {}

class AnimalFactory {

  create(rawData) {

    if (Array.isArray(rawData)) {

      return rawData.map((...args) => this.create(...args));
    }

    return new Animal(rawData);
  }
}

// creates one animal
new AnimalFactory().create({
  name: 'Bob'
});

// creates an array with x animals
new AnimalFactory().create([
  { name: 'Elvis' },
  { name: 'Lilly' }
]);

// ES5
function Animal () {}

function AnimalFactory () {

  this.create = function create(rawData) {

    if (Array.isArray(rawData)) {

      return rawData.map(this.create.bind(this));
    }

    return new Animal(rawData);
  };
}

// creates one animal
new AnimalFactory().create({
  name: 'Bob'
});

// creates an array with x animals
new AnimalFactory().create([
  { name: 'Elvis' },
  { name: 'Lilly' }
]);
