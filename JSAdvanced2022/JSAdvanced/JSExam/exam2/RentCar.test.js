const rentCar = require('./RentCar');
const assert = require('assert').strict;

describe('Rent Car', () => {
    describe('SearchCar Function', () => {
        //invalid tests
        it('Test Method SearchCar IF shop is object return Invalid input', () => {
            assert.throws(() => rentCar.searchCar({}, 'BMW'), Error);
        });

        it('Test Method SearchCar IF shop is string return Invalid input', () => {
            assert.throws(() => rentCar.searchCar('array', 'BMW'), Error);
        });

        it('Test Method SearchCar IF shop is number return Invalid input', () => {
            assert.throws(() => rentCar.searchCar(5, 'BMW'), Error);
        });

        it('Test Method SearchCar IF shop is decimal number return Invalid input', () => {
            assert.throws(() => rentCar.searchCar(2.5, 'BMW'), Error);
        });

        it('Test Method SearchCar IF shop is undefined return Invalid input', () => {
            assert.throws(() => rentCar.searchCar(undefined, 'BMW'), Error);
        });

        it('Test Method SearchCar IF shop is null return Invalid input', () => {
            assert.throws(() => rentCar.searchCar(null, 'BMW'), Error);
        });

        it('Test Method SearchCar IF model is object return Invalid input', () => {
            assert.throws(() => rentCar.searchCar([], {}), Error);
        });

        it('Test Method SearchCar IF model is array return Invalid input', () => {
            assert.throws(() => rentCar.searchCar([], []), Error);
        });

        it('Test Method SearchCar IF model is number return Invalid input', () => {
            assert.throws(() => rentCar.searchCar([], 5), Error);
        });

        it('Test Method SearchCar IF model is decimal number return Invalid input', () => {
            assert.throws(() => rentCar.searchCar([], 2.5), Error);
        });

        it('Test Method SearchCar IF model is undefined return Invalid input', () => {
            assert.throws(() => rentCar.searchCar([], undefined), Error);
        });

        it('Test Method SearchCar IF model is null return Invalid input', () => {
            assert.throws(() => rentCar.searchCar([], null), Error);
        });

        it('Test Method SearchCar IF model is not equal to shop element Throws Error', () => {
            assert.throws(() => rentCar.searchCar(['Audi'], 'BMW'), Error);
        });
        //valid tests
        it('Test Method SearchCar IF model is equal to shop element successfull', () => {
            let expected = `There is 1 car of model BMW in the catalog!`;
            let actual = rentCar.searchCar(['BMW'], 'BMW');

            assert.equal(actual, expected);
        });
    });

    describe('CalculatePriceOfCar Function', () => {
        //invalid tests
        it('Test Method CalculatePriceOfCar IF model is array return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar([], 5), Error);
        });

        it('Test Method CalculatePriceOfCar IF model is object return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar({}, 5), Error);
        });

        it('Test Method CalculatePriceOfCar IF model is number return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar(2, 5), Error);
        });

        it('Test Method CalculatePriceOfCar IF model is decimal number return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar(2.5, 5), Error);
        });

        it('Test Method CalculatePriceOfCar IF model is undefined return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar(undefined, 5), Error);
        });

        it('Test Method CalculatePriceOfCar IF model is null return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar(null, 5), Error);
        });

        it('Test Method CalculatePriceOfCar IF number is array return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar('BMW', []), Error);
        });

        it('Test Method CalculatePriceOfCar IF number is object return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar('BMW', {}), Error);
        });

        it('Test Method CalculatePriceOfCar IF number is string return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar('BMW', '1234'), Error);
        });

        it('Test Method CalculatePriceOfCar IF number is decimal number return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar('BMW', 2.5), Error);
        });

        it('Test Method CalculatePriceOfCar IF number is undefined return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar('BMW', undefined), Error);
        });

        it('Test Method CalculatePriceOfCar IF number is null return Invalid input', () => {
            assert.throws(() => rentCar.calculatePriceOfCar('BMW', null), Error);
        });

        it('Test Method CalculatePriceOfCar IF model is not equal to model from catalog obj element Throws Error', () => {
            assert.throws(() => rentCar.calculatePriceOfCar('Nissan', 2), Error);
        });
        //valid tests
        it('Test Method CalculatePriceOfCar IF model is equal to model from catalog obj element successfull', () => {
            let expected = `You choose BMW and it will cost $90!`;
            let actual = rentCar.calculatePriceOfCar('BMW', 2);

            assert.equal(actual, expected);
        });
    });

    describe('CheckBudget Function', () => {
        //invalid tests
        it('Test Method CheckBudget IF CostPerDay, Days and Budget is array return Invalid input', () => {
            assert.throws(() => rentCar.checkBudget([], [], []), Error);
        });

        it('Test Method CheckBudget IF CostPerDay, Days and Budget is object return Invalid input', () => {
            assert.throws(() => rentCar.checkBudget({}, {}, {}), Error);
        });

        it('Test Method CheckBudget IF CostPerDay, Days and Budget is string return Invalid input', () => {
            assert.throws(() => rentCar.checkBudget('BMW', 'BMW', 'BMW'), Error);
        });

        it('Test Method CheckBudget IF CostPerDay, Days and Budget is undefined return Invalid input', () => {
            assert.throws(() => rentCar.checkBudget(undefined, undefined, undefined), Error);
        });

        it('Test Method CheckBudget IF CostPerDay, Days and Budget is null return Invalid input', () => {
            assert.throws(() => rentCar.checkBudget(null, null, null), Error);
        });

        it('Test Method CheckBudget IF Days is decimal number return Invalid input', () => {
            assert.throws(() => rentCar.checkBudget(2, 2.5, 4), Error);
        });
        //valid tests
        it('Test Method CheckBudget IF CostPerDay is bigger to Budget', () => {
            let expected = 'You need a bigger budget!';
            let actual = rentCar.checkBudget(40, 2, 50);

            assert.equal(actual, expected);
        });

        it('Test Method CheckBudget IF CostPerDay is less to Budget', () => {
            let expected = 'You rent a car!';
            let actual = rentCar.checkBudget(40, 2, 90);

            assert.equal(actual, expected);
        });

        it('Test Method CheckBudget IF CostPerDay is equal to Budget', () => {
            let expected = 'You rent a car!';
            let actual = rentCar.checkBudget(40, 2, 80);

            assert.equal(actual, expected);
        });
    });
});