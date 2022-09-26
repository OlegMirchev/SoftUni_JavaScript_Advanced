function solve(array) {

    let firtsNumber = Number(array.shift());
    let lastNumber = Number(array.pop());

    return firtsNumber + lastNumber;
}

console.log(solve(['20', '30', '40']));
