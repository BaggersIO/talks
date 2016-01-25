//ES6
class Animal {

  constructor(type) {

    this.type = type;
  }

  move() {

    console.log(`${this.type} moves.`);
  }
}

let cat = new Animal('cat');

cat.move();

//ES5
function Animal (type) {

  this.type = type;
}

Animal.prototype.move = function () {

  console.log(this.type + ' moves.');
}

var cat = new Animal('cat');

cat.move();
