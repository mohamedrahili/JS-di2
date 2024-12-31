class Book {
    constructor(title, author, year, pages) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
    }
    showinfo() {
        console.log(`The book named ${this.title} comme with ${this.pages} page was written by the author ${this.author} in ${this.year}`);
    }
}
module.exports = Book;
