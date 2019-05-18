'use strict';

var add = function add(a, b) {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

var user = {
  name: 'String',
  cities: ['Ala', 'Montreal', 'Lol'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    console.log(this.name);
    console.log(this.cities);

    return this.cities.map(function (city) {
      return _this.name + ' has lived in ' + city;
    });
    // return cityMessages;

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());

var multiplier = {
  numbers: [2, 4, 6],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (num) {
      return num * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
