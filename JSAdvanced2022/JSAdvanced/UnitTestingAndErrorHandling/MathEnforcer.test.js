const mathEnforcer = require('./MathEnforcer');
const assert = require('assert').strict;

describe('MathEnforcer', () => {
    describe('addFive Function', () => {
        //invalid tests number
        it('Test Method Type of Return Undefined Equal array', () => {
            assert.equal(mathEnforcer.addFive([]), undefined);
        });

        it('Test Method Type of Return Undefined Equal object', () => {
            assert.equal(mathEnforcer.addFive({a:1}), undefined);
        });

        it('Test Method Type of Return Undefined Equal undefined', () => {
            assert.equal(mathEnforcer.addFive(undefined), undefined);
        });

        it('Test Method Type of Return Undefined Equal null', () => {
            assert.equal(mathEnforcer.addFive(null), undefined);
        });

        it('Test Method Type of Return Undefined Equal string', () => {
            assert.equal(mathEnforcer.addFive('hi'), undefined);
        });
        //valid tests number add five
        it('Test Method Return success number add five', () => {
            assert.equal(mathEnforcer.addFive(5), 10);
        });

        it('Test Method Return success negative number add five', () => {
            assert.equal(mathEnforcer.addFive(-5), 0);
        });

        it('Test Method Return success decimal number add five', () => {
            assert.equal(mathEnforcer.addFive(1.5), 6.5);
        });
    });

    describe('subtractTen Function', () => {
        //invalid tests number
        it('Test Method Type of Return Undefined Equal array', () => {
            assert.equal(mathEnforcer.subtractTen([]), undefined);
        });

        it('Test Method Type of Return Undefined Equal object', () => {
            assert.equal(mathEnforcer.subtractTen({a:1}), undefined);
        });

        it('Test Method Type of Return Undefined Equal undefined', () => {
            assert.equal(mathEnforcer.subtractTen(undefined), undefined);
        });

        it('Test Method Type of Return Undefined Equal null', () => {
            assert.equal(mathEnforcer.subtractTen(null), undefined);
        });

        it('Test Method Type of Return Undefined Equal string', () => {
            assert.equal(mathEnforcer.subtractTen('hi'), undefined);
        });
        //valid tests number substract ten
        it('Test Method Return success number substract ten', () => {
            assert.equal(mathEnforcer.subtractTen(11), 1);
        });

        it('Test Method Return success negative number substract ten', () => {
            assert.equal(mathEnforcer.subtractTen(-5), -15);
        });

        it('Test Method Return success decimal number substract ten', () => {
            assert.equal(mathEnforcer.subtractTen(11.5), 1.5);
        });
    });

    describe('sum', () => {
        //invalid tests numbers
        it('Test Method Type of Return Undefined first Equal array', () => {
            assert.equal(mathEnforcer.sum([], 1), undefined);
        });

        it('Test Method Type of Return Undefined second Equal array', () => {
            assert.equal(mathEnforcer.sum(1, []), undefined);
        });

        it('Test Method Type of Return Undefined first Equal object', () => {
            assert.equal(mathEnforcer.sum({a:1}, 1), undefined);
        });

        it('Test Method Type of Return Undefined second Equal object', () => {
            assert.equal(mathEnforcer.sum(1, {a:1}), undefined);
        });

        it('Test Method Type of Return Undefined first Equal undefined', () => {
            assert.equal(mathEnforcer.sum(undefined, 1), undefined);
        });

        it('Test Method Type of Return Undefined second Equal undefined', () => {
            assert.equal(mathEnforcer.sum(1, undefined), undefined);
        })

        it('Test Method Type of Return Undefined first Equal null', () => {
            assert.equal(mathEnforcer.sum(null, 1), undefined);
        });

        it('Test Method Type of Return Undefined second Equal null', () => {
            assert.equal(mathEnforcer.sum(1, null), undefined);
        });

        it('Test Method Type of Return Undefined first Equal string', () => {
            assert.equal(mathEnforcer.sum('hi', 1), undefined);
        });

        it('Test Method Type of Return Undefined second Equal string', () => {
            assert.equal(mathEnforcer.sum(1, 'hi'), undefined);
        });
        //valid tests numbers sum
        it('Test Method Return success numbers sum', () => {
            assert.equal(mathEnforcer.sum(10, 10), 20);
        });

        it('Test Method Return success negative numbers sum', () => {
            assert.equal(mathEnforcer.sum(-5, -5.5), -10.5);
        });

        it('Test Method Return success decimal numbers sum', () => {
            assert.equal(mathEnforcer.sum(1.5, 1.5), 3);
        });
    });
});