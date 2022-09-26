const isOddOrEven = require('./EvenOrOdd');
const assert = require('assert').strict;

describe('EvenOrOdd Functions', () => {
    //invalid tests
    it('Test Method Type of Return Undefined Equal Number', () => {
        assert.equal(isOddOrEven(5), undefined);
    });

    it('Test Method Type of Return Undefined Equal undefined', () => {
        assert.equal(isOddOrEven(undefined), undefined);
    });

    it('Test Method Type of Return Undefined Equal null', () => {
        assert.equal(isOddOrEven(null), undefined);
    });

    it('Test Method Type of Return Undefined Equal decimal number', () => {
        assert.equal(isOddOrEven(2.5), undefined);
    });

    it('Test Method Type of Return Undefined Equal object', () => {
        assert.equal(isOddOrEven({a:1}), undefined);
    });

    it('Test Method Type of Return Undefined Equal array', () => {
        assert.equal(isOddOrEven([]), undefined);
    });
    //valid test
    it('Test Method Even number', () => {
        assert.equal(isOddOrEven('hi'), 'even');
    });

    it('Test Method Odd number', () => {
        assert.equal(isOddOrEven('cat'), 'odd');
    });
});