function sumNumbers(input1, input2) {
    let number1 = Number(input1);
    let number2 = Number(input2);
    let result = 0;

    for (let index = number1; index <= number2; index++) {
        result += index; 
    }

    console.log(result);
}

sumNumbers('1', '5');