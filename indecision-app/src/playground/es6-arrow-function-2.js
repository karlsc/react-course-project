const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

console.log(add(55, 1));

const user = {
  name: 'String',
  cities: ['Ala', 'Montreal', 'Lol'],
  printPlacesLived() {
    console.log(this.name);
    console.log(this.cities);

    return this.cities.map((city) =>
      this.name + ' has lived in ' + city);
    // return cityMessages;

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2, 4, 6],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((num) => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());