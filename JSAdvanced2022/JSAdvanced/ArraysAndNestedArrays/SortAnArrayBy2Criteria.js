function solve(array) {

    let output = array.sort(function (a, b) {
        return a.length - b.length || a.localeCompare(b); 
    }); 

    output.forEach(e => console.log(e));
}

solve(['alpha', 'beta', 'gamma']);