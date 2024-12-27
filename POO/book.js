class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    showinfo() {
        console.log(`${this.title} was written by the author ${this.author}`);
    }
}
module.exports = Book;
