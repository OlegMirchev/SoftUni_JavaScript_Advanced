const companyAdministration = require('./CompanyAdministration');
const assert = require('assert').strict;

describe('CompanyAdministration', () => {
    describe('HiringEmployee Function', () => {
        //invalid test
        it('Test Method hiringEmployee If position is not a Programmer throw Error', () => {
            assert.throws(() => companyAdministration.hiringEmployee('John', 'Marketing', 3), Error);
        });
        //valid tests
        it('Test Method hiringEmployee If position is a Programmer and years is more than 3', () => {
            let expected = `John was successfully hired for the position Programmer.`;

            assert.equal(companyAdministration.hiringEmployee('John', 'Programmer', 4), expected);
        });

        it('Test Method hiringEmployee If position is a Programmer and years is equal 3', () => {
            let expected = `John was successfully hired for the position Programmer.`;

            assert.equal(companyAdministration.hiringEmployee('John', 'Programmer', 3), expected);
        });

        it('Test Method hiringEmployee If position is a Programmer and years is less 3', () => {
            let expected = `John is not approved for this position.`;

            assert.equal(companyAdministration.hiringEmployee('John', 'Programmer', 2), expected);
        });
    });

    describe('CalculateSalary Function', () => {
        //invalid tests
        it('Test Method calculateSalary If hours is array throw Error', () => {
            assert.throws(() => companyAdministration.calculateSalary([]), Error);
        });

        it('Test Method calculateSalary If hours is object throw Error', () => {
            assert.throws(() => companyAdministration.calculateSalary({}), Error);
        });

        it('Test Method calculateSalary If hours is string throw Error', () => {
            assert.throws(() => companyAdministration.calculateSalary('2'), Error);
        });

        it('Test Method calculateSalary If hours is null throw Error', () => {
            assert.throws(() => companyAdministration.calculateSalary(null), Error);
        });

        it('Test Method calculateSalary If hours is undefined throw Error', () => {
            assert.throws(() => companyAdministration.calculateSalary(undefined), Error);
        });

        it('Test Method calculateSalary If hours is less than zero throw Error', () => {
            assert.throws(() => companyAdministration.calculateSalary(-1), Error);
        });
        //valid tests
        it('Test Method calculateSalary If hours is valid parametar is success return amount', () => {
            assert.equal(companyAdministration.calculateSalary(2), 30);
        });

        it('Test Method calculateSalary If hours is valid parametar and hours is more than 160h is success return amount', () => {
            assert.equal(companyAdministration.calculateSalary(200), 4000);
        });
    });

    describe('FiredEmployee Function', () => {
        //invalid tests
        it('Test Method firedEmployee If array is object throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee({}, 2), Error);
        });

        it('Test Method firedEmployee If array is string throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee('[1,2,3]', 2), Error);
        });

        it('Test Method firedEmployee If array is number throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(5, 2), Error);
        });

        it('Test Method firedEmployee If array is decimal number throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(1.5, 2), Error);
        });

        it('Test Method firedEmployee If array is null throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(null, 2), Error);
        });

        it('Test Method firedEmployee If array is undefined throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(undefined, 2), Error);
        });

        it('Test Method firedEmployee If index is array throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(['John', 'Mark', 'Sam'], []), Error);
        });

        it('Test Method firedEmployee If index is object throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(['John', 'Mark', 'Sam'], {}), Error);
        });

        it('Test Method firedEmployee If index is string throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(['John', 'Mark', 'Sam'], '2'), Error);
        });

        it('Test Method firedEmployee If index is decimal number throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(['John', 'Mark', 'Sam'], 1.5), Error);
        });

        it('Test Method firedEmployee If index is null throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(['John', 'Mark', 'Sam'], null), Error);
        });

        it('Test Method firedEmployee If index is undefined throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(['John', 'Mark', 'Sam'], undefined), Error);
        });

        it('Test Method firedEmployee If index is negative number throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(['John', 'Mark', 'Sam'], -1), Error);
        });

        it('Test Method firedEmployee If index is more than array length throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(['John', 'Mark', 'Sam'], 4), Error);
        });

        it('Test Method firedEmployee If index is equal array length throw Error', () => {
            assert.throws(() => companyAdministration.firedEmployee(['John', 'Mark', 'Sam'], 3), Error);
        });
        //valid test
        it('Test Method firedEmployee If array and index is valid parametars and remove employee success', () => {
            let expected = 'John, Mark';

            assert.equal(companyAdministration.firedEmployee(['John', 'Mark', 'Sam'], 2), expected);
        });
    });
});