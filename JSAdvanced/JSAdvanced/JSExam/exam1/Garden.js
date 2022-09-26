class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        let objPlant = {};

        if (spaceRequired > this.spaceAvailable) {
            throw new Error('Not enough space in the garden.');
        }

        objPlant = { plantName, spaceRequired, ripe: false, quantity: 0 };

        this.plants.push(objPlant);

        this.spaceAvailable -= spaceRequired;

        return `The ${plantName} has been successfully planted in the garden.`;
    }

    ripenPlant(plantName, quantity) {
        if (!this.plants.some(p => p.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        for (const obj of this.plants) {
            if (obj.plantName === plantName) {
                if (obj.ripe === true) {
                    throw new Error(`The ${obj.plantName} is already ripe.`);
                }
            }
        }

        if (quantity <= 0) {
            throw new Error('The quantity cannot be zero or negative.');
        }

        for (const objP of this.plants) {
            if (objP.plantName === plantName) {
                objP.ripe = true;
                objP.quantity += quantity;

                if (objP.quantity === 1) {
                    return `${objP.quantity} ${objP.plantName} has successfully ripened.`;
                } else if (objP.quantity > 1) {
                    return `${objP.quantity} ${objP.plantName}s have successfully ripened.`;
                }
            }
        }
    }

    harvestPlant(plantName) {
        let objPlant = {};

        if (!this.plants.some(p => p.plantName === plantName)) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }

        for (const obj of this.plants) {
            if (obj.plantName === plantName) {
                if (obj.ripe === false) {
                    throw new Error(`The ${obj.plantName} cannot be harvested before it is ripe.`);
                }
            }
        }

        let removeName = '';
        let removeQuantity = 0;
        let spaceNumb = 0;

        for (const obj of this.plants) {
            if (obj.plantName === plantName) {
                removeName = obj.plantName;
                removeQuantity = obj.quantity;
                spaceNumb = obj.spaceRequired;
            }
        }
        
        objPlant = { plantName: removeName, quantity: removeQuantity };
        this.plants = this.plants.filter(p => p.plantName !== plantName);
        this.storage.push(objPlant);
        this.spaceAvailable += spaceNumb;

        return `The ${plantName} has been successfully harvested.`;
    }

    generateReport() {
        let result = [];

        let joinName = [];
        let joinNameAndQuantity = [];
        let joinStorage = [];

        result.push(`The garden has ${this.spaceAvailable} free space left.`);

        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));

        for (const obj of this.plants) {
            joinName.push(obj.plantName);
        }

        result.push(`Plants in the garden: ${joinName.join(', ')}`);

        if (this.storage.length === 0) {
            result.push('Plants in storage: The storage is empty.');
        } else {
            for (const obj of this.storage) {
                joinNameAndQuantity.push(obj.plantName, `(${obj.quantity})`);
            }
            joinStorage.push(joinNameAndQuantity.join(' '));
        }

        if (this.storage.length !== 0) {
            result.push(`Plants in storage: ${joinStorage.join(', ')}`);
        }

        return result.join('\n').trim();
    }
}