function solve(array, startIndex, endIndex) {

    let sum = 0;

    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex >= array.length) {
        endIndex = array.length - 1;
    }

    if (!Array.isArray(array)) {
        return sum = NaN;
    }

    array = array.slice(startIndex, endIndex + 1);

    for (let i = 0; i < array.length; i++) {
        if (!Number(array[i])) {
            return sum = NaN;
        }

        sum += array[i];
    }

    return sum;
}

console.log(solve([10, 20, 30, 40, 50, 60], 3, 300));