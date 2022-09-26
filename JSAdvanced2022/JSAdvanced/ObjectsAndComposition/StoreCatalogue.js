function solve(array) {

    let charLetter = '';

    array.sort((a, b) => a.localeCompare(b));

    for (let i = 0; i < array.length; i++) {
        let [productName, price] = array[i].split(' : ');

        if (charLetter !== productName[0][0]) {
            charLetter = productName[0][0];
            console.log(charLetter);
        }

        console.log(`${productName}: ${Number(price)}`);
    }
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);