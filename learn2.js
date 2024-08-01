//program to check even number
// const number = 44;
// if (number % 2 === 0) {
//   console.log(`${number} is even number`);
// } else {
//   console.log(`${number} is odd number`);
// }

//Program for sitch statement
const marks = 90;
switch (true) {
  case marks <= 35:
    console.log(`grade according to ${marks} marks is F`);
    break;
  case marks <= 55:
    console.log(`grade according to ${marks} marks is C`);
    break;
  case marks <= 75:
    console.log(`grade according to ${marks} marks is B`);
    break;
  case marks <= 100:
    console.log(`grade according to ${marks} marks is A`);
    break;

  default:
    console.log("Enter marks between 0 to 100");
    break;
}

//program of for loop
// const arr = [10, 11, 12, 13];
// for (let i = 0; i < arr.length; i++) {
//   console.log(`value of index ${i} is ${arr[i]}`);
// }

//program for fibonacci series

const number = 10;
const fibonacciSeries = [];
let n1 = 0,
  n2 = 1,
  nextTerm;

for (let i = 1; i <= number; i++) {
  fibonacciSeries.push(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}
console.log(fibonacciSeries.toString());
