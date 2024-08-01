//Object
const technologies = {
  name: "React",
  description: "A JavaScript library for building user interfaces",
  year: 2013,
};

console.log(technologies.name, "Dot Notation"); //Dot Notation
console.log(technologies["description"], "'Bracket Notation'"); //Bracket Notation

//Method
//Methods are function stored as Object porperties
const person = {
  firstName: "Divya",
  lastName: "Attarde",
  age: 20,
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
    // return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName());

//for in loop
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

//getting object keys value and it return the array of the keys
const keys = Object.keys(person);
console.log(keys);

//getting object values and it return the array of the values
const values = Object.values(person);
console.log(values);

//Write a function to check if an object a property or not
const hasProperty = (obj, input) => {
  let hasKey = false;
  for (const key in obj) {
    if (key === input) {
      hasKey = true;
    }
  }
  console.log(hasKey);
};
hasProperty(person, "age");

// write a program for the length of the object
const objectLength = (obj) => {
  let length = 0;
  for (const key in obj) {
    length++;
  }
  console.log(length);
};
objectLength(person);

// spread operator (...<ObjectName>)
const health = {
  ...person,
  heart: "55%",
  bloodGropu: "A+",
};
console.log(health);
