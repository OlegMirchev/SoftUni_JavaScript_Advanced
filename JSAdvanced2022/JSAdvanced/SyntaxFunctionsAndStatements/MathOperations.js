function calculateNumber(firstNumber, secondNumber, operator) {
    let result;

    if (operator == '+') {
        result = firstNumber + secondNumber;
    }else if(operator == '-') {
        result = firstNumber - secondNumber;
    }else if (operator == '*') {
        result = firstNumber * secondNumber;
    }else if (operator == '/') {
        result = firstNumber / secondNumber;
    }else if (operator == '%') {
        result = firstNumber % secondNumber;
    }else {
        result = firstNumber ** secondNumber;
    }

    console.log(result);
}

calculateNumber(3, 5.5, '*');