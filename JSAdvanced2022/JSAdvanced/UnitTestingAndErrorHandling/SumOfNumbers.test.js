const assert = require('assert').strict;
const sum = require('./SumOfNumbers');

describe('SumOfNumbers', () => {
    it('ShouldReturnSumMethodIsSuccess', () => {

        let expected = 100;
        let numbers = [10, 20, 30, 40];
    
        let actual = sum(numbers);
    
        assert.equal(actual, expected);
    });
});
