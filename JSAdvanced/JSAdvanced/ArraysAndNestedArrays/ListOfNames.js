function solve(array) {

    array.sort((a, b) => a.localeCompare(b));
    let currentNumber = 0;

    for (let i = 0; i < array.length; i++) {
        console.log(++currentNumber + `.` + array[i]);
    }
}

solve(["John", "Bob", "Christina", "Ema"]);