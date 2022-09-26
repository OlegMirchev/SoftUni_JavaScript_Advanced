class Restaurant {
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
        this.menuResult = [];
        this.arrayProducts = [];
    }

    loadProducts(products) {
        for (const p of products) {
            let [productName, productQuantityN, productTotalPriceN] = p.split(' ');
            let productQuantity = Number(productQuantityN);
            let productTotalPrice = Number(productTotalPriceN);

            if (productTotalPrice <= this.budgetMoney) {
                this.stockProducts = {
                    productName,
                    productQuantity,
                    productTotalPrice
                };

                if (this.arrayProducts.some(p => p.productName === productName)) {
                    for (const arPro of this.arrayProducts) {
                        if (arPro.productName === productName) {
                            arPro.productQuantity += productQuantity;
                        }
                    }
                } else {
                    this.arrayProducts.push(this.stockProducts);
                }

                this.budgetMoney -= productTotalPrice;

                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }

        return this.history.join('\n');
    }

    addToMenu(meal, products, price) {
        let meals = {
            products: meal,
            arrayProduct: [],
            price
        };

        for (const p of products) {
            let [productName, productQuantityN] = p.split(' ');
            let productQuantity = Number(productQuantityN);

            let product = {
                productName,
                productQuantity
            };
            meals.arrayProduct.push(product);
        }

        if (this.menu[meals.products] !== meal) {
            this.menu[meals.products] = meal;
            this.menuResult.push(meals);

            let countMeals = Object.keys(this.menu).length;

            return countMeals === 1 ? `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
                : `Great idea! Now with the ${meal} we have ${countMeals} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in the our menu, try something different.`;
        }
    }

    showTheMenu() {
        let countMeals = Object.keys(this.menu).length;
        let result = [];

        if (countMeals.length === 0) {
            return 'Our menu is not ready yet, please come later...';
        } else {
            for (const p of this.menuResult) {
                result.push(`${p.products} - $ ${p.price}`);
            }
        }

        return result.join('\n');
    }

    makeTheOrder(meal) {
        let isValid = false;
        let array = [];


        for (const p of this.arrayProducts) {
            // let obj = {
            //     name: p.productName,
            //     quantity: p.productQuantity
            // };
            array.push(p);
        }

        if (this.menuResult.some(p => p.products === meal)) {
            for (let i = 0; i < this.arrayProducts.length; i++) {
                if (array.includes(this.menuResult[0].arrayProduct[i].productName)) {
                    
                    //this.arrayProducts[i].productQuantity -= this.menuResult[0].arrayProduct[i].productQuantity;
                    isValid = true;
                } else {
                    isValid = false;
                }
            }
            
            this.budgetMoney += this.menuResult[0].price;
            
            if (isValid) {
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menuResult[0].price}.`;
            } else {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        } else {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        }
    }
}

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
// console.log(kitchen.showTheMenu());

let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
console.log(kitchen.makeTheOrder('frozenYogurt'));