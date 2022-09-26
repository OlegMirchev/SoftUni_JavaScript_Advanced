function solve(array, param) {

    if (param === 'asc') {
        array.sort((a, b) => a - b);
    } else if (param === 'desc') {
        array.sort((a, b) => b - a);
    }

    return array;
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));