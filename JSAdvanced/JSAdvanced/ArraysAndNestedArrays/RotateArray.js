function solve(array, rotation) {

    let output = [];

    for (let i = 0; i < rotation; i++) {
        array.unshift(array.pop());

    }

    return array.join(' ');
}

console.log(solve(['1', '2', '3', '4'], 2));