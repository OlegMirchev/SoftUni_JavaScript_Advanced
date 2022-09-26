const assert = require('assert').strict;
const isSymmetric = require('./CheckForSymmetry');

describe('CheckForSymmetry', () => {
    it('ShouldFuncionReturnNotArray', () => {

        let expected = false;
        let arr = 5;

        let actual = isSymmetric(arr);

        assert.equal(actual, expected);

    });

    it('ShouldFuncionReturnObjFalse', () => {

        let expected = false;
        let arr = {a:1, b:2};

        let actual = isSymmetric(arr);

        assert.equal(actual, expected);

    });

    it('ShouldFuncionReturnIsArray', () => {

        let expected = false;
        let arr = [1, 2, 3, 4, 5];

        let actual = isSymmetric(arr);

        assert.equal(actual, expected);

    });

    it('ShouldFuncionReturnIsArrayButNotSymmetric', () => {

        let expected = false;
        let arr = [1, 2, -1];

        let actual = isSymmetric(arr);

        assert.equal(actual, expected);

    });

    it('ShouldFuncionReturnIsArraySuccessfull', () => {

        let expected = true;
        let arr = [1, 2, 1];

        let actual = isSymmetric(arr);

        assert.equal(actual, expected);

    });

    it('ShouldFuncionReturnIsArraySuccessfull1', () => {

        let expected = true;
        let arr = [1, 1, 1];

        let actual = isSymmetric(arr);

        assert.equal(actual, expected);

    });

    it('ShouldFuncionReturnIsArraySuccessfull2', () => {

        let expected = true;
        let arr = [1];

        let actual = isSymmetric(arr);

        assert.equal(actual, expected);

    });

    it('ShouldFuncionReturnIsArraySuccessfull3', () => {

        let expected = true;
        let arr = ['hi', '2', 'hi'];

        let actual = isSymmetric(arr);

        assert.equal(actual, expected);

    });
});