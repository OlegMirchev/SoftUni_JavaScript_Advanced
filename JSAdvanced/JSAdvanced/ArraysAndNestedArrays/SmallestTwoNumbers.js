function solve(array) {

    let numbers = array.sort((a, b) => a - b);

    console.log(numbers[0]);
    console.log(numbers[1]);
}

solve([30, 15, 50, 5]);