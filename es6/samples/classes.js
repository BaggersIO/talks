//ES6
class Animal {

  constructor(type) {

    this.type = type;
  }

  move() {

  }
}

//ES5
function Animal (type) {

  this.type = type;
}

Animal.prototype.move = function () {
  
}
