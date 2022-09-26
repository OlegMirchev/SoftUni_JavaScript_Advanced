function solve(commands) {

    let output = [];

    for (let i = 0; i < commands.length; i++) {
        switch (commands[i]) {
            case 'add':
                output.push(i + 1);
                break;
            case 'remove':
                output.pop();
                break;
        }
    }

    if (output.length === 0) {
        console.log('Empty');
    } else {
        output.forEach(n => console.log(n));
    }
}

solve(['add', 'add', 'remove', 'add', 'add']);