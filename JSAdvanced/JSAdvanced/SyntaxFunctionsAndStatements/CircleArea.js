function areaCircleCalculate(input) {
    let result;

    if (typeof(input) == 'number') {
        result = Math.PI * Math.pow(input, 2);
        console.log(result.toFixed(2));
    }else {
        result = `We can not calculate the circle area, because we receive a ${typeof(input)}.`
        console.log(result);
    }
}

areaCircleCalculate(5);