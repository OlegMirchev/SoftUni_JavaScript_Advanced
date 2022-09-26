class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        let objCar = {};

        if (!model || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }

        objCar = { model, horsepower, price, mileage };

        this.availableCars.push(objCar);

        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMileage) {
        if (!this.availableCars.some(c => c.model === model)) {
            throw new Error(`${model} was not found!`);
        }

        for (const car of this.availableCars) {
            if (car.model === model) {
                let objCar = {};
                let differentMileage = Math.abs(car.mileage - desiredMileage);
    
                if (car.mileage <= desiredMileage) {
    
                } else if (differentMileage <= 40000) {
                    car.price *= 0.95;
                } else if (differentMileage > 40000) {
                    car.price *= 0.90;
                }
    
                objCar = { model, horsepower: car.horsepower, soldPrice: car.price };
                this.availableCars = this.availableCars.filter(c => c.model !== model);
                this.soldCars.push(objCar);
                this.totalIncome += objCar.soldPrice;
                
                return `${model} was sold for ${objCar.soldPrice.toFixed(2)}$`;
            }
        }
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return 'There are no available cars';
        }

        let cars = [];

        cars.push('-Available cars:');

        for (const car of this.availableCars) {
            cars.push(`---${car.model} - ${car.horsepower} HP - ${car.mileage.toFixed(2)} km - ${car.price.toFixed(2)}$`);
        }

        return cars.join('\n');
    }

    salesReport(criteria) {
        if (criteria !== 'horsepower' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        let result = [];

        if (criteria === 'horsepower') {
            this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
        } else {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        }

        result.push(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);
        result.push(`-${this.soldCars.length} cars sold:`);

        for (const car of this.soldCars) {
            result.push(`---${car.model} - ${car.horsepower} HP - ${car.soldPrice.toFixed(2)}$`);
        }

        return result.join('\n');
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
dealership.sellCar('Toyota Corolla', 230000);
dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));