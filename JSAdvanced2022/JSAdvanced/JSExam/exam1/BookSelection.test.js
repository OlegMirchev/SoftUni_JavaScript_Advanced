const bookSelection = require('./BookSelection');
const assert = require('assert').strict;

describe('BookSelection', () => {
    describe('IsGenreSuitable Function', () => {
        //valid tests
        it('Test Method IsGenreSuitable If Age is less to 12', () => {
            let expected = `Books with Thriller genre are not suitable for kids at 2 age`;
            
            assert.equal(bookSelection.isGenreSuitable('Thriller', 2), expected);
        });

        it('Test Method IsGenreSuitable If Age equal to 12', () => {
            let expected = `Books with Thriller genre are not suitable for kids at 12 age`;
            
            assert.equal(bookSelection.isGenreSuitable('Thriller', 12), expected);
        });

        it('Test Method IsGenreSuitable If Genre equal to Thriller', () => {
            let expected = `Books with Thriller genre are not suitable for kids at 6 age`;
            
            assert.equal(bookSelection.isGenreSuitable('Thriller', 6), expected);
        });

        it('Test Method IsGenreSuitable If Genre equal to Horror', () => {
            let expected = `Books with Horror genre are not suitable for kids at 6 age`;
            
            assert.equal(bookSelection.isGenreSuitable('Horror', 6), expected);
        });
        //invalid tests
        it('Test Method IsGenreSuitable If Age is bigger to 12', () => {
            let expected = `Those books are suitable`;
            
            assert.equal(bookSelection.isGenreSuitable('Horror',14), expected);
        });

        it('Test Method IsGenreSuitable If Genre is different from Thriller or Horror', () => {
            let expected = `Those books are suitable`;
            
            assert.equal(bookSelection.isGenreSuitable('Lowwww',5), expected);
        });
    });

    describe('IsItAffordable Function', () => {
        //invalid tests
        it('Test Method IsItAffordable Type of Price is array return Invalid input', () => {
            assert.throws(() => bookSelection.isItAffordable([], 2), Error);
        });

        it('Test Method IsItAffordable Type of Price is object return Invalid input', () => {
            assert.throws(() => bookSelection.isItAffordable({}, 2), Error);
        });

        it('Test Method IsItAffordable Type of Price is string return Invalid input', () => {
            assert.throws(() => bookSelection.isItAffordable('4', 2), Error);
        });

        it('Test Method IsItAffordable Type of Price is undefined return Invalid input', () => {
            assert.throws(() => bookSelection.isItAffordable(undefined, 2), Error);
        });

        it('Test Method IsItAffordable Type of Price is null return Invalid input', () => {
            assert.throws(() => bookSelection.isItAffordable(null, 2), Error);
        });

        it('Test Method IsItAffordable Type of Budget is array return Invalid input', () => {
            assert.throws(() => bookSelection.isItAffordable(5, []), Error);
        });

        it('Test Method IsItAffordable Type of Budget is object return Invalid input', () => {
            assert.throws(() => bookSelection.isItAffordable(5, {}), Error);
        });

        it('Test Method IsItAffordable Type of Budget is string return Invalid input', () => {
            assert.throws(() => bookSelection.isItAffordable(5, 'lake'), Error);
        });

        it('Test Method IsItAffordable Type of Budget is undefined return Invalid input', () => {
            assert.throws(() => bookSelection.isItAffordable(5, undefined), Error);
        });

        it('Test Method IsItAffordable Type of Budget is null return Invalid input', () => {
            assert.throws(() => bookSelection.isItAffordable(5, null), Error);
        });
        //valid tests
        it('Test Method IsItAffordable Type of Price/Budget is numbers and Budget is bigger from Price', () => {
            let expected = `Book bought. You have 1$ left`

            assert.equal(bookSelection.isItAffordable(5, 6), expected);
        });

        it('Test Method IsItAffordable Type of Price/Budget is decimal numbers and Budget is bigger from Price', () => {
            let expected = `Book bought. You have 1$ left`

            assert.equal(bookSelection.isItAffordable(5.5, 6.5), expected);
        });

        it('Test Method IsItAffordable Type of Price/Budget is numbers and Price is bigger from Budget', () => {
            let expected = `You don't have enough money`

            assert.equal(bookSelection.isItAffordable(5, 4), expected);
        });

        it('Test Method IsItAffordable Type of Price/Budget is decimal numbers and Price is bigger from Budget', () => {
            let expected = `You don't have enough money`

            assert.equal(bookSelection.isItAffordable(5.2, 4.2), expected);
        });
    });

    describe('SuitableTitles Function', () => {
        //invalid tests
        it('Test Method SuitableTitles Type of Array is object return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles({}, 'Thriller'), Error);
        });

        it('Test Method SuitableTitles Type of Array is string return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles('12345', 'Thriller'), Error);
        });

        it('Test Method SuitableTitles Type of Array is number return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles(5, 'Thriller'), Error);
        });

        it('Test Method SuitableTitles Type of Array is undefined return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles(undefined, 'Thriller'), Error);
        });

        it('Test Method SuitableTitles Type of Array is null return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles(null, 'Thriller'), Error);
        });

        it('Test Method SuitableTitles Type of Array is decimal number return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles(2.5, 'Thriller'), Error);
        });

        it('Test Method SuitableTitles Type of Genre is object return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles([], {}), Error);
        });

        it('Test Method SuitableTitles Type of Genre is array return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles([], []), Error);
        });

        it('Test Method SuitableTitles Type of Genre is number return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles([], 5), Error);
        });

        it('Test Method SuitableTitles Type of Genre is undefined return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles([], undefined), Error);
        });

        it('Test Method SuitableTitles Type of Genre is null return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles([], null), Error);
        });

        it('Test Method SuitableTitles Type of Genre is decimal number return Invalid input', () => {
            assert.throws(() => bookSelection.suitableTitles([], 5.8), Error);
        });
        //valid tests
        it('Test Method SuitableTitles successfully added book tittle in array', () => {
            let actual = bookSelection.suitableTitles([{tittle: "The Da Vinci Code", genre: "Thriller"}], 'Thriller');
            let expected = 1;

            assert.equal(actual.length, expected);
        });

        it('Test Method SuitableTitles not added book tittle in array', () => {
            let actual = bookSelection.suitableTitles([{tittle: "The Da Vinci Code", genre: "Thriller"}], 'Horror');
            let expected = 0;

            assert.equal(actual.length, expected);
        });
    });
});