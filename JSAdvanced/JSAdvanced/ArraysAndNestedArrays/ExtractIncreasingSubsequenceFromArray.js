function solve(array) {
    let output = [];
    output.push(array[0]);

    array.reduce((previousValue, currentValue) => {
        if (previousValue <= currentValue) {
            output.push(currentValue);
            previousValue = currentValue;
        }
        return previousValue;
    });

    return output;
}

console.log(solve([20,
    3,
    2,
    15,
    6,
    1]));