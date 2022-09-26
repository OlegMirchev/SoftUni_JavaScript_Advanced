function solve(array) {

    let numbers = [];

    for (const numb of array) {
        if (numb < 0) {
            numbers.unshift(numb);
        } else {
            numbers.push(numb);
        }
    }

    numbers.forEach(n => console.log(n));
}

solve([3, -2, 0, -1]);