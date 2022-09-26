function solve(matrix) {

    let isValid = false;
    let sumCol = 0;
    let magical = 0;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            sumCol += matrix[row][col];

        }
        magical = sumCol;
        break;
    }

    for (let row = 1; row < matrix.length; row++) {
        sumCol = 0;
        for (let col = 0; col < matrix[row].length; col++) {
            sumCol += matrix[row][col];
        }

        if (magical === sumCol) {
            isValid = true;
        } else {
            isValid = false;
            break;
        }
    }

    return isValid;
}

console.log(solve([[4, 5, 6],
                   [6, 5, 4],
                   [5, 5, 5]]));