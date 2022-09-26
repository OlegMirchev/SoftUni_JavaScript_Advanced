function cookingNumbers(numb, ...command) {
    let number = Number(numb);

    for (let i = 0; i < command.length; i++) {
        switch (command[i]) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number++;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number *= 0.80;
                console.log(number);
                break;
        }
    }
}

cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');