function solve(array) {

    let max = Number.MIN_SAFE_INTEGER;

    for (let row = 0; row < array.length; row++) {
        for (let col = 0; col < array[row].length; col++) {
            if (array[row][col] > max) {
                max = array[row][col];
            }
        }
    }

    return max;
}

console.log(solve([[-20, -50, -10],
    [-8, -33, -145]]));