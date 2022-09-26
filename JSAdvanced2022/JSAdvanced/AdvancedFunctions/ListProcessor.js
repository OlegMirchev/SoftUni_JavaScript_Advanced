function solve(array) {

    let result = [];

    for (const data of array) {
        let [command, value] = data.split(' ');

        switch (command) {
            case 'add':
                add(value);
                break;
            case 'remove':
                remove(value);
                break;
            case 'print':
                print();
                break;
        }
    }

    function add(input) {
        result.push(input);
    }

    function remove(input) {
        result = result.filter(x => x !== input);

    }

    function print() {
        console.log(result.join(','));
    }
}

solve(['add pesho', 'add peter', 'add george', 'add peter', 'remove peter', 'print']);