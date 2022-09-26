const lookupChar = require('./CharLookup');
const assert = require('assert').strict;

describe('CharLookup Functions', () => {
    //invalid tests string
    it('Test Method Type of Return Undefined Equal array', () => {
        assert.equal(lookupChar([], 1), undefined);
    });

    it('Test Method Type of Return Undefined Equal object', () => {
        assert.equal(lookupChar({a:1}, 1), undefined);
    });

    it('Test Method Type of Return Undefined Equal undefined', () => {
        assert.equal(lookupChar(undefined, 1), undefined);
    });

    it('Test Method Type of Return Undefined Equal null', () => {
        assert.equal(lookupChar(null, 1), undefined);
    });

    it('Test Method Type of Return Undefined Equal number', () => {
        assert.equal(lookupChar(1, 1), undefined);
    });

    it('Test Method Type of Return Undefined Equal decimal number', () => {
        assert.equal(lookupChar(1.5, 1), undefined);
    });
    //invalid tests index
    it('Test Method isInteger Return Undefined Equal array', () => {
        assert.equal(lookupChar('abc', []), undefined);
    });

    it('Test Method isInteger Return Undefined Equal object', () => {
        assert.equal(lookupChar('abc', {a:1}), undefined);
    });

    it('Test Method isInteger Return Undefined Equal undefined', () => {
        assert.equal(lookupChar('abc', undefined), undefined);
    });

    it('Test Method isInteger Return Undefined Equal null', () => {
        assert.equal(lookupChar('abc', null), undefined);
    });

    it('Test Method isInteger Return Undefined Equal string', () => {
        assert.equal(lookupChar('abc', 'abc'), undefined);
    });

    it('Test Method isInteger Return Undefined Equal decimal number', () => {
        assert.equal(lookupChar('abc', 1.5), undefined);
    });

    it('Test Method Index Equal string length', () => {
        assert.equal(lookupChar('abc', 3), 'Incorrect index');
    });

    it('Test Method Index big than from string length', () => {
        assert.equal(lookupChar('abc', 4), 'Incorrect index');
    });

    it('Test Method Index below than from zero', () => {
        assert.equal(lookupChar('abc', -1), 'Incorrect index');
    });
    //valid tests
    it('Test Method Return Successfull char', () => {
        assert.equal(lookupChar('abc', 2), 'c');
    });

    it('Test Method Return Successfull one symbol', () => {
        assert.equal(lookupChar('b', 0), 'b');
    }); 
});