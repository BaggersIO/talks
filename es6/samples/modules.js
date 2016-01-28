// animal.js
const PRIVATE_TYPE = Symbol();

export class Animal {
  constructor(type) {
    this[PRIVATE_TYPE] = type;
  }
}

// animals.js
import {Animal} from './animal';

class Dog extends Animal {
  constructor() {
    super('mammalian');
  }
}

class Cat extends Animal {
  constructor() {
    super('reptile');
  }
}

export {
  Dog,
  Cat
};

// zoo.js
import * as animals from './animals';

class Zoo {
  constructor() {
    this.animals = [
      new animals.Dog(),
      new animals.Dog(),
      new animals.Cat()
    ];
  }
}

export default new Zoo();
