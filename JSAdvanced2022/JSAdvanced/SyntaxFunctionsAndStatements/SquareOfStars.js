function printRectangle(input) {
    let star = '* ';

    if (input === null || input === '  ' || input === 0) {
        for (let i = 0; i < 5; i++) {
            console.log(`${(star.repeat(5)).trim()}`);
        } 
    }else {
        for (let i = 0; i < input; i++) {
            console.log(`${(star.repeat(input)).trim()}`);
        }
    }
}

printRectangle(7);