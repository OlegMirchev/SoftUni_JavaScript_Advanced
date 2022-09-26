function solve(array) {

    let numbers = array.sort((a, b) => a - b);
    let output = [];

    if (array.length % 2 === 0) {
        output = numbers.slice(array.length / 2);
    } else {
        output = numbers.slice((array.length / 2));
    }

    return output;
}

console.log(solve([3, 19, 14, 7, 2, 19, 6]));