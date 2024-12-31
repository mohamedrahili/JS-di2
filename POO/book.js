class Book {
    constructor(title, author, pages, year) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.year = year;
    }
    showinfo() {
        console.log(`The book named ${this.title} comme with ${this.pages} page was written by the author ${this.author} in ${this.year}`);
    }
}
module.exports = Book;
