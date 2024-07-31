/* const users = [
  {
    id: 1,
    name: 'Akshay',
    age: 34,
  },
  {
    id: 2,
    name: 'Divya',
    age: 37,
  },
  {
    id: 3,
    name: 'Priyansh',
    age: 46,
  },
  {
    id: 4,
    name: 'Arnika',
    age: 74,
  },
  {
    id: 5,
    name: 'Chirayu',
    age: 23,
  },
  {
    id: 6,
    name: 'Ram',
    age: 43,
  },
]

// Object with Array
let company = {
  name: 'Datacode',
  employees: [1, 2, 3, 4, 5, 6]
}
// Print Name of all Employees in a list */

// Array and object combination [{},{},{}]
const users = [
  {
    id: 1,
    name: "Akshay",
    age: 34,
  },
  {
    id: 2,
    name: "Divya",
    age: 37,
  },
  {
    id: 3,
    name: "Priyansh",
    age: 46,
  },
  {
    id: 4,
    name: "Arnika",
    age: 74,
  },
  {
    id: 5,
    name: "Chirayu",
    age: 23,
  },
  {
    id: 6,
    name: "Ram",
    age: 43,
  },
];

// Array and object combination {[],[],[]}
let employeesName = [];
users.map((item) => {
  employeesName.push(item.name);
});
console.log(employeesName);

//find oldest one
let people = [
  { name: "Priyansh", age: 75 },
  { name: "Akshay", age: 25 },
  { name: "Arnika", age: 30 },
  { name: "Aashika", age: 35 },
  { name: "Ram", age: 35 },
  { name: "Prakhar", age: 85 },
  { name: "Disha", age: 55 },
  { name: "Chirayu", age: 15 },
  { name: "Divya", age: 45 },
];

const findOldest = (people) => {
  let usersAge = [];
  people.map((item) => {
    usersAge.push(item.age);
  });
  let maxAge = 0;
  for (const user of usersAge) {
    if (user > maxAge) {
      maxAge = user;
    }
  }
  console.log("Oldest is ", maxAge);
};
findOldest(people);

let companyDatacode = {
  name: "Datacode",
  employees: ["Akshay"],
};
const addEmployee = (EmployeeName) => {
  companyDatacode.employees.push(EmployeeName);
  console.log(companyDatacode);
};
addEmployee("Divya");
 
const addEmployeeDetail = (employeesName) => {
  let employeeData = {};
  people.map((user) => {
    if (user.name === employeesName) {
      employeeData = { name: user.name, age: user.age };
    }
  });
  console.log(employeeData);
};
addEmployeeDetail("Divya");
