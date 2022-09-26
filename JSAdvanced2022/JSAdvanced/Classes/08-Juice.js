function solve(array) {

    let objJucie = {}

    let bottle = {};

    for (const juice of array) {
        let [juiceName, quantityString] = juice.split(' => ');
        let quantity = Number(quantityString);

        if (juiceName in objJucie) {
            objJucie[juiceName] += quantity;
        }else {
            objJucie[juiceName] = quantity;
        }
        
        if (objJucie[juiceName] >= 1000) {
            if (juiceName in bottle) {
                bottle[juiceName] += quantity;  
            }else {
                bottle[juiceName] = objJucie[juiceName];  
            }
        }
    }

    for (const key in bottle) {
        console.log(`${key} => ${Math.floor(bottle[key] / 1000)}`);
    }
}

solve(['Orange => 2000',
'Peach => 1432',
'Peach => 600',
'Banana => 450',
'Strawberry => 549']);