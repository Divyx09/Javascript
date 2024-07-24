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

//to 