const Book = require('./book');

class Library {
    constructor(name = "Library", books = [], pages = 0, year = 0) {
        this.name = name;
        this.books = books;
        this.pages = pages;
        this.year = year;
    }

    addBook(book) {
        this.books.push(book);
    }

    removeBook(book) {
        this.books = this.books.filter((b) => b !== book);
    }

    getBookByTitle(title) {
        return this.books.find((b) => b.title === title);
    }

    getBookByAuthor(author) {
        return this.books.filter((b) => b.author === author);
    }
    
    getBooksByYear(year) {
        return this.books.filter((b) => b.year === year);
    }

    getBooksByPages(pages) {
        return this.books.filter((b) => b.pages === pages);
    }

    listBooks() {
        if (this.books.length === 0) {
            console.log("No books in the library.");
        } else {
            this.books.forEach(book => book.showinfo());
        }
    }
}

// Book instances
const book1 = new Book("Unlock It", "Dan Lok", 2019, 240);
const book2 = new Book("F.U. Money", "Dan Lok", 2014, 210);
const book3 = new Book("Influence", "Dan Lok", 2021, 180);
const book4 = new Book("Think and Grow Rich", "Napoleon Hill", 1937, 238);

// Initialize Library
const library = new Library();

// Add books
console.log("Adding books to the library...");
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

// List all books
console.log("\nListing all books in the library:");
library.listBooks();

// Display information of a single book
console.log("\nDisplaying information for a single book:");
book1.showinfo();

// Get book by title
console.log("\nGetting a book by title:");
const searchByTitle = library.getBookByTitle("F.U. Money");
console.log(searchByTitle ? `${searchByTitle.title} found!` : "Book not found.");

// Get books by author
console.log("\nGetting books by author Dan Lok:");
const booksByAuthor = library.getBookByAuthor("Dan Lok");
booksByAuthor.forEach((book) => console.log(`${book.title} by ${book.author}`));

// Get bokks by year
console.log("\nGetting books by year 2014:");
const booksByYear = library.getBooksByYear(2014);
booksByYear.forEach((book) => console.log(`${book.title} by ${book.author}`));

// Get books by page 
console.log("\nGetting books by page 240:");
const booksByPage = library.getBooksByPages(240);
booksByPage.forEach((book) => console.log(`${book.title} by ${book.author}`));

// Remove a book
console.log("\nRemoving a book from the library...");
library.removeBook(book2);

// List all books after removal
console.log("\nListing all books after removing 'F.U. Money':");
library.listBooks();
