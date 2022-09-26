function evenNumbs(array) {
    let numbers = [];

    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            numbers.push(array[i]);
        }
    }
    console.log(numbers.join(' '));
}

evenNumbs(['20', '30', '40', '50', '60']);