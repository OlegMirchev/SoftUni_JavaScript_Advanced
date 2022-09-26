function sovle() {

    let result = {};

    for (const word of arguments) {
        let type = typeof word;
        console.log(`${type}: ${word}`);

        if (!result[type]) {
            result[type] = 0;
        }

        result[type]++;
    }

    Object.keys(result).sort((a, b) => result[b] - result[a]).forEach(e => console.log(`${e} = ${result[e]}`));
    // Object.values(result).sort((a, b) => b - a);
    // for (const e in result) {
    //     console.log(`${e} = ${result[e]}`)
    // }
}

sovle('cat', 42, function () { console.log('Hello world!'); });