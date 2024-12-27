const Book = require('./book');

class Library {
    constructor(name = "My Library", books = []) {
        this.name = name;
        this.books = books;
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
    
    listBooks() {
            this.books.forEach(book => book.showinfo());
    }
}

const book1 = new Book("Unlock It", "Dan Lok");
const book2 = new Book("F.U. Money", "Dan Lok");
const book3 = new Book("Influence!", "Dan Lok");

const myLibrary = new Library();
console.log("Adding books to the library...");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
myLibrary.listBooks();

console.log("\nRemoving a book from the library...");
myLibrary.removeBook(book2);  
myLibrary.listBooks();  
