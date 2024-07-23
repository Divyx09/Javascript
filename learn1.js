let a = 10,
  b = 20;
let isNotEqual = !!(a != b);
// console.log(isNotEqual)

const data = {
  name: "divy",
  age: 20,
  isDeveloper: true,
  skills: ["React", "js"],
  sum: () => {},
};
// console.log(data, "data");

const arrayData = () => [
  data.name,
  data.age,
  data.isDeveloper,
  data.skills,
  isNotEqual,
];
// console.log(isNotEqual);

// Area of Circle && Area of Triangle
var areaOfCircle;
var areaOfTriangle;
const calculateArea = () => {
  let radius = 5;
  let height = 10;
  let base = 20;
  areaOfCircle = Math.PI * radius * radius;
  areaOfTriangle = 0.5 * base * height;
};
calculateArea();
console.log("Area of Circle: ", areaOfCircle);
console.log("Area of Triangle: ", areaOfTriangle);

// write a function to calculate a square of a number
const CalculateSquare = (number) => {
  square = number * number;
  console.log(`square of ${number} is ${square}`);
};
CalculateSquare(5);

// write a function to finf factorial of number
const Factorial = (num) => {
  let fact = 1;
  for (i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(`The factorial is ${fact}.`);
};
Factorial(6);
