function greatestDivisor(firstNumber, secondNumber) {

    while (firstNumber !== secondNumber) {
        if (firstNumber > secondNumber) {
            firstNumber -= secondNumber;
        }else {
            secondNumber -= firstNumber;
        }
    }

    console.log(firstNumber);
}

greatestDivisor(18, 5);