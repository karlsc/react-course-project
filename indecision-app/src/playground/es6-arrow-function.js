function square(x) {
  return x * x;
};

const squareArrow = x =>
  x * x;

console.log(squareArrow(8));

const getFirstName = (name) => name.split(' ')[0];