class Book {
    constructor(title, author, year, pages, price) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
        this._price = price; 
    }

    // Getter for price
    get price() {
        return this._price;
    }

    // Setter methodes for price with validation
    set price(newPrice) {
        if (newPrice > 0) {
            this._price = newPrice;
        } else {
            console.log("The price must be greater than 0.");
        }
    }

    showinfo() {
        console.log(`The book named ${this.title} with ${this.pages} pages was written by the author ${this.author} in ${this.year}. The price is $${this.price}.`);
    }
}

module.exports = Book;