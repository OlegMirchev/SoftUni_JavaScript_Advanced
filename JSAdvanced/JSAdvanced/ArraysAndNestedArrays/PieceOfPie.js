function solve(array, flavor1, flavor2) {

    let indexFlavor1 = array.indexOf(flavor1);
    let indexFlavor2 = array.indexOf(flavor2);

    let output = [];

    output = array.slice(indexFlavor1, indexFlavor2 + 1);

    return output;
}

console.log(solve(['Apple Crisp',
'Mississippi Mud Pie',
'Pot Pie',
'Steak and Cheese Pie',
'Butter Chicken Pie',
'Smoked Fish Pie'],
'Pot Pie',
'Smoked Fish Pie'));