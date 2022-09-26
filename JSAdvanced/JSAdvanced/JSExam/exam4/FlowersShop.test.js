const flowerShop = require('./FlowersShop');
const assert = require('assert').strict;

describe('Flowers Shop', () => {
    describe('CalcPriceOfFlowers Function', () => {
        //invalid tests
        it('Test Method CalcPriceOfFlowers If flower is array return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers([], 2 , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If flower is object return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers({}, 2 , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If flower is number return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers(2, 2 , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If flower is decimal number return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers(1.2, 2 , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If flower is null return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers(null, 2 , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If flower is undefined return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers(undefined, 2 , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If price is array return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', [] , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If price is object return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', {} , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If price is string return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', '2' , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If price is decimal number return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', 1.5 , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If price is null return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', null , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If price is undefined return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', undefined , 2), Error);
        });

        it('Test Method CalcPriceOfFlowers If quantity is array return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', 2 , []), Error);
        });

        it('Test Method CalcPriceOfFlowers If quantity is object return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', 2 , {}), Error);
        });

        it('Test Method CalcPriceOfFlowers If quantity is string return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', 2 , '2'), Error);
        });

        it('Test Method CalcPriceOfFlowers If quantity is decimal number return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', 2 , 1.2), Error);
        });

        it('Test Method CalcPriceOfFlowers If quantity is null return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', 2 , null), Error);
        });

        it('Test Method CalcPriceOfFlowers If quantity is undefined return Invalid input!', () => {
            assert.throws(() => flowerShop.calcPriceOfFlowers('Rose', 2 , undefined), Error);
        });
        //valid test
        it('Test Method CalcPriceOfFlowers If flower, price and quantity is valid parametars', () => {
            let expected = 'You need $4.00 to buy Rose!';

            assert.equal(flowerShop.calcPriceOfFlowers('Rose', 2, 2), expected);
        });
    });

    describe('CheckFlowersAvailable Function', () => {
        //invalid test
        it('Test Method CheckFlowersAvailable If array invalid index of flower', () => {
            let expected = 'The Rose are sold! You need to purchase more!';

            assert.equal(flowerShop.checkFlowersAvailable('Rose', ['Lily', 'Orchid']), expected);
        });
        //valid test
        it('Test Method CheckFlowersAvailable If array valid index of flower', () => {
            let expected = 'The Rose are available!';

            assert.equal(flowerShop.checkFlowersAvailable('Rose', ['Rose', 'Lily', 'Orchid']), expected);
        });
    });

    describe('SellFlowers Function', () => {
        //invalid tests
        it('Test Method SellFlowers If array is object return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers({}, 0), Error);
        });

        it('Test Method SellFlowers If array is string return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers('arr', 0), Error);
        });

        it('Test Method SellFlowers If array is number return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(2, 0), Error);
        });

        it('Test Method SellFlowers If array is decimal number return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(1.5, 0), Error);
        });

        it('Test Method SellFlowers If array is null return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(null, 0), Error);
        });

        it('Test Method SellFlowers If array is undefined return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(undefined, 0), Error);
        });

        it('Test Method SellFlowers If space is array return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], []), Error);
        });

        it('Test Method SellFlowers If space is object return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], {}), Error);
        });

        it('Test Method SellFlowers If space is string return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], '2'), Error);
        });

        it('Test Method SellFlowers If space is decimal number return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1.5), Error);
        });

        it('Test Method SellFlowers If space is null return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], null), Error);
        });

        it('Test Method SellFlowers If space is undefined return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], undefined), Error);
        });

        it('Test Method SellFlowers If space is less from zero return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], -1), Error);
        });

        it('Test Method SellFlowers If space is bigger from length array return Invalid input!', () => {
            assert.throws(() => flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 5), Error);
        });
        //valid test
        it('Test Method SellFlowers If array and space is success remove flower', () => {
            let expected = ['Rose',  'Orchid'].join(' / ');

            assert.equal(flowerShop.sellFlowers(['Rose', 'Lily', 'Orchid'], 1), expected);
        });
    });
});