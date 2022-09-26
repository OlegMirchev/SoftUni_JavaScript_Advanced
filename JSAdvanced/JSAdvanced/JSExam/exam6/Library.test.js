const library = require('./Library');
const assert = require('assert').strict;

describe('Library', () => {
    describe('CalcPriceOfBook Function', () => {
        //invalid tests
        it('Test Method calcPriceOfBook If nameOfBook is array throw Error', () => {
            assert.throws(() => library.calcPriceOfBook([], 1), Error);
        });

        it('Test Method calcPriceOfBook If nameOfBook is object throw Error', () => {
            assert.throws(() => library.calcPriceOfBook({}, 1), Error);
        });

        it('Test Method calcPriceOfBook If nameOfBook is number throw Error', () => {
            assert.throws(() => library.calcPriceOfBook(1, 1), Error);
        });

        it('Test Method calcPriceOfBook If nameOfBook is decimal number throw Error', () => {
            assert.throws(() => library.calcPriceOfBook(1.5, 1), Error);
        });

        it('Test Method calcPriceOfBook If nameOfBook is null throw Error', () => {
            assert.throws(() => library.calcPriceOfBook(null, 1), Error);
        });

        it('Test Method calcPriceOfBook If nameOfBook is undefined throw Error', () => {
            assert.throws(() => library.calcPriceOfBook(undefined, 1), Error);
        });

        it('Test Method calcPriceOfBook If year is array throw Error', () => {
            assert.throws(() => library.calcPriceOfBook('Lord of the Ring', []), Error);
        });

        it('Test Method calcPriceOfBook If year is object throw Error', () => {
            assert.throws(() => library.calcPriceOfBook('Lord of the Ring', {}), Error);
        });

        it('Test Method calcPriceOfBook If year is string throw Error', () => {
            assert.throws(() => library.calcPriceOfBook('Lord of the Ring', '2'), Error);
        });

        it('Test Method calcPriceOfBook If year is decimal number throw Error', () => {
            assert.throws(() => library.calcPriceOfBook('Lord of the Ring', 1.5), Error);
        });

        it('Test Method calcPriceOfBook If year is null throw Error', () => {
            assert.throws(() => library.calcPriceOfBook('Lord of the Ring', null), Error);
        });

        it('Test Method calcPriceOfBook If year is undefined throw Error', () => {
            assert.throws(() => library.calcPriceOfBook('Lord of the Ring', undefined), Error);
        });
        //valid tests
        it('Test Method calcPriceOfBook If year is less than 1980y return total successes', () => {
            let expected = `Price of Lord of the Ring is 10.00`;
            let actual = library.calcPriceOfBook('Lord of the Ring', 1970);

            assert.equal(actual, expected);
        });

        it('Test Method calcPriceOfBook If year is equal than 1980y return total successes', () => {
            let expected = `Price of Lord of the Ring is 10.00`;
            let actual = library.calcPriceOfBook('Lord of the Ring', 1980);

            assert.equal(actual, expected);
        });

        it('Test Method calcPriceOfBook If year is more than 1980y return messages success', () => {
            let expected = `Price of Lord of the Ring is 20.00`;
            let actual = library.calcPriceOfBook('Lord of the Ring', 1990);

            assert.equal(actual, expected);
        });
    });

    describe('FindBook Function', () => {
        //invalid tests
        it('Test Method findBook If bookArr is zero length throw Error', () => {
            assert.throws(() => library.findBook([], 'Harry Potter'), Error);
        });
        //valid tests
        it('Test Method findBook If desiredBook is finded from bookArr', () => {
            let expected = 'We found the book you want.';
            let actual = library.findBook(['Lord of the Ring', 'Harry Potter'], 'Harry Potter');

            assert.equal(actual, expected);
        });

        it('Test Method findBook If desiredBook is not finded from bookArr', () => {
            let expected = 'The book you are looking for is not here!';
            let actual = library.findBook(['Lord of the Ring', 'Harry Potter'], 'Troy');

            assert.equal(actual, expected);
        });
    });

    describe('ArrangeTheBooks Function', () => {
        //invalid tests
        it('Test Method arrangeTheBooks If countBook is array throw Error', () => {
            assert.throws(() => library.arrangeTheBooks([]), Error);
        });

        it('Test Method arrangeTheBooks If countBook is object throw Error', () => {
            assert.throws(() => library.arrangeTheBooks({}), Error);
        });

        it('Test Method arrangeTheBooks If countBook is string throw Error', () => {
            assert.throws(() => library.arrangeTheBooks('2'), Error);
        });

        it('Test Method arrangeTheBooks If countBook is decimal number throw Error', () => {
            assert.throws(() => library.arrangeTheBooks(1.5), Error);
        });

        it('Test Method arrangeTheBooks If countBook is null throw Error', () => {
            assert.throws(() => library.arrangeTheBooks(null), Error);
        });

        it('Test Method arrangeTheBooks If countBook is undefined throw Error', () => {
            assert.throws(() => library.arrangeTheBooks(undefined), Error);
        });

        it('Test Method arrangeTheBooks If countBook is negative number throw Error', () => {
            assert.throws(() => library.arrangeTheBooks(-4), Error);
        });
        //valid tests
        it('Test Method arrangeTheBooks If countBook is number is less from availableSpace return messages success', () => {
            let expected = 'Great job, the books are arranged.';
            let actual = library.arrangeTheBooks(10);

            assert.equal(actual, expected);
        });

        it('Test Method arrangeTheBooks If countBook is number is equal from availableSpace return messages success', () => {
            let expected = 'Great job, the books are arranged.';
            let actual = library.arrangeTheBooks(40);

            assert.equal(actual, expected);
        });

        it('Test Method arrangeTheBooks If countBook is number is more from availableSpace return messages success', () => {
            let expected = 'Insufficient space, more shelves need to be purchased.';
            let actual = library.arrangeTheBooks(50);

            assert.equal(actual, expected);
        });
    });
});