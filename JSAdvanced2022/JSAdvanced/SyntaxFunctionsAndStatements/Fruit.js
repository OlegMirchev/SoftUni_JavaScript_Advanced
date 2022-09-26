function calculatePriceFruit(fruit, weigth, price) {
    let weithKm = weigth / 1000;
    let pricePerKilogram = weithKm * price;

    console.log(`I need $${pricePerKilogram.toFixed(2)} to buy ${weithKm.toFixed(2)} kilograms ${fruit}.`);
}

calculatePriceFruit('apple', 1563, 2.35);