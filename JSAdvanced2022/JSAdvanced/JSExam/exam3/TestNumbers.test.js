const testNumbers = require('./TestNumbers');
const assert = require('assert').strict;

describe('Test Number', () => {
    describe('SumNumbers Function', () => {
        // invalid tests
        it('Test Method sumNumbers If numb1 is object return undefined', () => {
            assert.equal(testNumbers.sumNumbers({}, 1), undefined);
        });

        it('Test Method sumNumbers If numb1 is array return undefined', () => {
            assert.equal(testNumbers.sumNumbers([], 1), undefined);
        });

        it('Test Method sumNumbers If numb1 is string return undefined', () => {
            assert.equal(testNumbers.sumNumbers('1', 1), undefined);
        });

        it('Test Method sumNumbers If numb1 is null return undefined', () => {
            assert.equal(testNumbers.sumNumbers(null, 1), undefined);
        });

        it('Test Method sumNumbers If numb1 is undefined return undefined', () => {
            assert.equal(testNumbers.sumNumbers(undefined, 1), undefined);
        });

        it('Test Method sumNumbers If numb2 is object return undefined', () => {
            assert.equal(testNumbers.sumNumbers(1, {}), undefined);
        });

        it('Test Method sumNumbers If numb2 is array return undefined', () => {
            assert.equal(testNumbers.sumNumbers(1, []), undefined);
        });

        it('Test Method sumNumbers If numb2 is string return undefined', () => {
            assert.equal(testNumbers.sumNumbers(1, '1'), undefined);
        });

        it('Test Method sumNumbers If numb2 is null return undefined', () => {
            assert.equal(testNumbers.sumNumbers(1, null), undefined);
        });

        it('Test Method sumNumbers If numb2 is undefined return undefined', () => {
            assert.equal(testNumbers.sumNumbers(1, undefined), undefined);
        });
        //valid tests
        it('Test Method sumNumbers If numb1 and numb2 is number return sum between them', () => {
            assert.equal(testNumbers.sumNumbers(1, 1), '2.00');
        });

        it('Test Method sumNumbers If numb1 and numb2 is demical number return sum between them', () => {
            assert.equal(testNumbers.sumNumbers(1.5, 1.5), '3.00');
        });
    });

    describe('NumberChecker Function', () => {
        //invalid tests
        it('Test Method numberChecker If value is object is not a number Throw Error', () => {
            assert.throws(() => testNumbers.numberChecker({}), Error);
        });

        it('Test Method numberChecker If value is undefined is not a number Throw Error', () => {
            assert.throws(() => testNumbers.numberChecker(undefined), Error);
        });

        it('Test Method numberChecker If value is string is not a number Throw Error', () => {
            assert.throws(() => testNumbers.numberChecker('aaa'), Error);
        });

        it('Test Method numberChecker If value is Nan is not a number Throw Error', () => {
            assert.throws(() => testNumbers.numberChecker(Nan), Error);
        });

        it('Test Method numberChecker If value is array is not a number Throw Error', () => {
            assert.throws(() => testNumbers.numberChecker(['Cat']), Error);
        });
        //valid tests
        it('Test Method numberChecker If number is even', () => {
            let expected = 'The number is even!';

            assert.equal(testNumbers.numberChecker(2), expected);
        });

        it('Test Method numberChecker If number is odd', () => {
            let expected = 'The number is odd!';

            assert.equal(testNumbers.numberChecker(3), expected);
        });
    });

    describe('AverageSumArray Function', () => {
        it('Test Method averageSumArray and return average arraySum', () => {
            let expected = 2;
            assert.equal(testNumbers.averageSumArray([1, 2, 3]), expected);
        });
    });
});