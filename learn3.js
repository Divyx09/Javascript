// Arrays are use to store multiple values in a single variable

let array = []; // Empty Array

//Array with ELements
let technologies = ["React", "Javascript", "Java"];
console.log(technologies, "technologies");

//Modifying Elemnets
technologies[2] = " CSS";
console.log(technologies, "java replaced by CSS");

//Array Length
console.log(technologies.length, "length of technologies");

// Add a new element at the end in the array using push() method
technologies.push("Next.js");
console.log(technologies, "using push method");

//remove last elements using pop() method
technologies.pop();
console.log(technologies, "using pop method");

//to remove first element of array using shift method
technologies = ["React", "Javascript", "Java"];
technologies.shift();
console.log(technologies, "using shift method");

//It is used to add or remove elements from an array
//splice(start: number, deleteCount?: number): T[];
technologies = ["React", "Javascript", "Java"];
technologies.splice(0, 0, "Python");
console.log(technologies, "using splice method");

//it is used to extract a section of array and returs a new array
//slice(start?: number, end?: number): T[];
const webTechnologies = technologies.slice(1, 3);
console.log(webTechnologies, "using slice method");

//to return the index of the value, we use indeOf()
const index = technologies.indexOf("Java");
console.log("At index " + index + " is " + technologies[index]);

//inculdes is used to the array has that item
const includes = technologies.includes("Java");
console.log("Does array includes Java? " + includes);

//to find a element in an array we use find() method
const find = technologies.find((tech) => tech === "Java");
console.log("Find " + find + " in array at " + technologies.indexOf(find));

//to sort an array we use sort() method
const sort = technologies.sort();
console.log("Sorted array " + sort);

// to reverse an array we use reverse() method
const reverse = technologies.reverse();
console.log("Reversed array " + reverse);

//for of loop to iterate the array
for (const tech of technologies) {
  console.log(tech);
}

//forEach is a method apply on array
const webTech = [
  {
    name: "HTML",
    years: 1990,
  },
  {
    name: "CSS",
    years: 1991,
  },
  {
    name: "JavaScript",
    years: 1995,
  },
  {
    name: "React",
    years: 2010,
  },
  {
    name: "Angular",
    years: 2015,
  },
  {
    name: "Vue",
    years: 2016,
  },
];
webTech.forEach((tech, i) => {
  console.log(i, tech);
});

//map method in array
const webTechs = webTech.map((tech) => tech.name);
console.log(webTechs);

//filter method
const webTechs2 = webTech.filter((tech) => tech.years > 2000);
console.log(webTechs2);

const numbers = [1, 4, 5, 3, 6, 4, 75, 34];
//largest number in an array
const largestInArray = (numbers) => {
  let largestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }
  return console.log(largestNumber, "using forLoop");
};
largestInArray(numbers);

//largest number in an array using for of loop
const largestInArray2 = (numbers) => {
  let largestNumber = numbers[0];
  for (const number of numbers) {
    if (number > largestNumber) {
      largestNumber = number;
    }
  }
  return console.log(largestNumber, "using for of loop");
};
largestInArray2(numbers);

//largest number in an array using map method
const largestInArray3 = (numbers) => {
  let largestNumber = numbers[0];
  numbers.map((number) => {
    if (number > largestNumber) {
      largestNumber = number;
    }
  });
  return console.log(largestNumber, "using map");
};
largestInArray3(numbers);

//largest number in an array using foreach loop
const largestInArray4 = (numbers) => {
  let largestNumber = numbers[0];
  numbers.forEach((number) => {
    if (number > largestNumber) {
      largestNumber = number;
    }
  });
  return console.log(largestNumber, "using forEach");
};
largestInArray4(numbers);

//reverse an array using function
const reverseArray = (numbers) => {
  let reversedArray = [];
  for (let i = numbers.length - 1; i >= 0; i--) {
    reversedArray.push(numbers[i]);
  }
  return console.log(reversedArray, "using for loop");
};
reverseArray(numbers);

// reverse an array using reverse() method
console.log(numbers.reverse());

