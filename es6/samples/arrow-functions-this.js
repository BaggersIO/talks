//ES6
let cat = {
  name: 'Elvis',
  fallAsleep(later = 1000) {

    window.setTimeout(() => {

      console.log('%s zzZZzZZzZ', this.name);

    }, later);
  }
};

cat.fallAsleep();

// ES5
let cat = {
  name: 'Lilly',
  fallAsleep(later) {
    later = later || 1000;

    window.setTimeout(function () {

      console.log('%s zzZZzZZzZ', this.name);
    }.bind(this));
  }
}

cat.fallAsleep();

/*
  Another option would be
  var that = this;

  ...

  that.name;
*/
