function cityTaxes(name, population, treasury) {

    let record = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            return this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            let percent = (percentage / 100) + 1;
            return this.population *= percent;
        },
        applyRecession(percentage) {
            let percent = 1 - (percentage / 100);
            return Math.floor(this.treasury *= percent);
        }
    }

    return record
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(20);
console.log(city.treasury);