// ### **Build a Library Management System**

// - **Duration**: To be completed by the next session.
// - **Objective**: Apply the concepts learned to create a practical application.
// - **Content**:
//     - **Requirements**:
//         - Create an array of book objects. Each book should have properties like title, author, and isAvailable.
//         - Implement functions to add a new book, remove a book, and list all books.
//         - Implement a function to search for books by a specific author.

let books = [
  {
    title: "The Last Bow",
    author: "Arthur Conan Doyle",
    isAvailable: true,
  },
  {
    title: "The Hound of the Baskervilles",
    author: "Arthur Conan ",
    isAvailable: true,
  },
  {
    title: "The Adventures of Sherlock Holmes",
    author: "Arthur  Doyle",
    isAvailable: true,
  },
];

const addBook = (bookName, author) => {
  books.push({ title: bookName, author, isAvailable: true });
};

const removeBook = (author) => {
  books = books.filter((book) => book.author !== author);
};

const displayAllBooks = () => {
  console.log(books.map((book) => book.title));
};

const searchBook = (author) => {
  return books.filter((book) => book.author.includes(author));
};

addBook("Harry Potter", "J. K. Rowling");
removeBook("Arthur Conan Doyle");
displayAllBooks();

console.log(searchBook("Arthur"));