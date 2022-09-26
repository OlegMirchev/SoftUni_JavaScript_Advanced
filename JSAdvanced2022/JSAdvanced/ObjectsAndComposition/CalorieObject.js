function solve(array) {

    let object = {};

    for (let i = 0; i < array.length; i += 2) {
        let product = array[i];
        let grams = Number(array[i + 1]);

        object[product] = grams;
    }

    return object;
}

console.log(solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));