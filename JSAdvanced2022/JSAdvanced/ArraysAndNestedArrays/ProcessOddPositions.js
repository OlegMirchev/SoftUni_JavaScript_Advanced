function solve(array) {

    let output = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            output.push(array[i] * 2);
        }
    }

    //output.map(n => n * 2);
    output.reverse();


    return output.join(' ');
}

console.log(solve([3, 0, 10, 4, 7, 3]));