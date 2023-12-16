/*
Filename: ComplexApp.js	
Description: This code is a sophisticated and complex application for managing a library's catalog.
*/
class Library {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.catalog = [];
    this.users = [];
  }

  addBook(book) {
    this.catalog.push(book);
  }

  removeBook(bookTitle) {
    this.catalog = this.catalog.filter((book) => book.title !== bookTitle);
  }

  addUser(user) {
    this.users.push(user);
  }

  removeUser(username) {
    this.users = this.users.filter((user) => user.username !== username);
  }

  displayCatalog() {
    console.log('------ Catalog ------');
    this.catalog.forEach((book) => {
      console.log(`${book.title} by ${book.author}`);
    });
    console.log('----------------------');
  }

  displayUsers() {
    console.log('------ Users ------');
    this.users.forEach((user) => {
      console.log(`${user.username}`);
    });
    console.log('-------------------');
  }
}

class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }
}

class User {
  constructor(username, age) {
    this.username = username;
    this.age = age;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    this.borrowedBooks.push(book);
    console.log(`${this.username} borrowed ${book.title}`);
  }

  returnBook(bookTitle) {
    this.borrowedBooks = this.borrowedBooks.filter(
      (book) => book.title !== bookTitle
    );
    console.log(`${this.username} returned ${bookTitle}`);
  }
}

// Create a new library instance
const myLibrary = new Library('My Library', 'New York');

// Create some books
const book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 'Fiction');
const book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 'Fiction');
const book3 = new Book('1984', 'George Orwell', 'Fiction');
const book4 = new Book('The Catcher in the Rye', 'J.D. Salinger', 'Fiction');

// Add books to the library's catalog
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.addBook(book4);

// Create some users
const user1 = new User('JohnDoe', 25);
const user2 = new User('JaneSmith', 32);
const user3 = new User('TomWilson', 43);

// Add users to the library
myLibrary.addUser(user1);
myLibrary.addUser(user2);
myLibrary.addUser(user3);

// User borrows a book
user1.borrowBook(book1);

// Display the library's catalog and users
myLibrary.displayCatalog();
myLibrary.displayUsers();

// User returns a book
user1.returnBook(book1.title);

// Display the updated library's catalog and users
myLibrary.displayCatalog();
myLibrary.displayUsers();
// ... (continues with more code)