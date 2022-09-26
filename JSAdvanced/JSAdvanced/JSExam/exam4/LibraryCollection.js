class LibraryCollection {
    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
    }

    addBook(bookName, bookAuthor) {
        if (this.capacity <= this.books.length) {
            throw new Error('Not enough space in the collection.');
        }

        let book = {bookName, bookAuthor, payed: false};

        this.books.push(book);

        return `The ${bookName}, with an author ${bookAuthor}, collect.`;
    }

    payBook(bookName) {
        if (!this.books.some(b => b.bookName === bookName)) {
            throw new Error(`${bookName} is not in the collection.`);
        }
        
        for (const b of this.books) {
            if (b.bookName === bookName) {
                if (b.payed === true) {
                    throw new Error(`${bookName} has already been paid.`);
                } else {
                    b.payed = true;
                }
            }
        }

        return `${bookName} has been successfully paid.`;
    }

    removeBook(bookName) {
        if (!this.books.some(b => b.bookName === bookName)) {
            throw new Error("The book, you're looking for, is not found.");
        }

        for (const b of this.books) {
            if (b.bookName === bookName) {
                if (b.payed === false) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`);
                }
            }
        }

        this.books = this.books.filter(b => b.bookName !== bookName);

        return `${bookName} remove from the collection.`;
    }

    getStatistics(bookAuthor) {
        let result = [];

        if (bookAuthor) {
            if (!this.books.some(b => b.bookAuthor === bookAuthor)) {
                throw new Error(`${bookAuthor} is not in the collection.`);
            }

            for (const b of this.books) {
                if (b.bookAuthor === bookAuthor) {
                    if (b.payed === true) {
                        result.push(`${b.bookName} == ${b.bookAuthor} - Has Paid.`);
                    }else {
                        result.push(`${b.bookName} == ${b.bookAuthor} - Not Paid.`);
                    }
                }
            }
        }else {
            let emptySlots = this.capacity - this.books.length;
            result.push(`The book collection has ${ emptySlots } empty spots left.`);

            this.books.sort((a, b) => a.bookName.localeCompare(b.bookName));

            for (const b of this.books) {
                if (b.payed === true) {
                    result.push(`${b.bookName} == ${b.bookAuthor} - Has Paid.`);
                }else {
                    result.push(`${b.bookName} == ${b.bookAuthor} - Not Paid.`);
                }
            }
        }

        return result.join('\n');
    }
}

const library = new LibraryCollection(5)
library.addBook('Don Quixote', 'Miguel de Cervantes');
library.payBook('Don Quixote');
library.addBook('In Search of Lost Time', 'Marcel Proust');
library.addBook('Ulysses', 'James Joyce');
console.log(library.getStatistics());