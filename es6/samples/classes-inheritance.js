//ES6
class Animal {

  // Code goes here
}

class Cat extends Animal {
  constructor(name) {
    super('cat');

    this.name = name;
  }
}

class Snail extends Animal {
  constructor(name) {
    super('snail');

    this.name = name;
  }
}

let cat = new Cat('Elvis');
let snail = new Snail('Lilly');

// ES5
function Animal (type) {
  this.type = type;
}

Animal.prototype.move = function () {

};

function Cat (name) {
  Animal.call(this, 'cat');

  this.name = name;
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Animal;

vat cat = new Cat('Elvis');

// Cat {type: "cat", name: "Elvis"}
