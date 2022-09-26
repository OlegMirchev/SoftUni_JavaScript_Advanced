class VegetableStore {
    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let result = [];

        for (const v of vegetables) {
            let [type, quantityN, priceN] = v.split(' ');
            let quantity = Number(quantityN);
            let price = Number(priceN);

            let vegetable = {
                type,
                quantity,
                price
            };

            if (this.availableProducts.some(v => v.type === type)) {
                for (const veg of this.availableProducts) {
                    if (veg.type === type) {
                        veg.quantity += quantity;
                        if (veg.price < price) {
                            veg.price = price;
                        }
                    }
                }
            } else {
                this.availableProducts.push(vegetable);

                result.push(vegetable.type);
            }
        }

        return `Successfully added ${result.join(', ')}`;
    }

    buyingVegetables(selectedProducts) {
        let result = [];
        let totalPrice = 0;

        for (const p of selectedProducts) {
            let [type, quantityN] = p.split(' ');
            let quantity = Number(quantityN);

            if (!this.availableProducts.some(v => v.type === type)) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
            }

            for (const veg of this.availableProducts) {
                if (veg.type === type && veg.quantity < quantity) {
                    throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`);
                }
            }

            for (const vegy of this.availableProducts) {
                if (vegy.type === type) {
                    totalPrice += quantity * vegy.price;
                    vegy.quantity -= quantity;

                }
            }
        }

        result.push(`Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`);

        return result.join('\n');
    }

    rottingVegetable(type, quantity) {
        if (!this.availableProducts.some(v => v.type === type)) {
            throw new Error(`${type} is not available in the store.`);
        }

        for (const veg of this.availableProducts) {
            if (veg.type === type) {
                if (veg.quantity < quantity) {
                    veg.quantity = 0;

                    return `The entire quantity of the ${type} has been removed.`;
                } else {
                    veg.quantity -= quantity;

                    return `Some quantity of the ${type} has been removed.`;
                }
            }
        }
    }

    revision() {
        let result = [];

        result.push('Available vegetables:');

        this.availableProducts.sort((a, b) => a.price - b.price);

        for (const vege of this.availableProducts) {
            result.push(`${vege.type}-${vege.quantity}-$${vege.price}`);
        }

        result.push(`The owner of the store is ${this.owner}, and the location is ${this.location}.`);

        return result.join('\n');
    }
}

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());