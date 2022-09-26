function solve(object) {

    let methodArr = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriRegex = /(^[\w.]+$)/gm;
    let versionArr = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let messageRegex = /([<>\\&'"])/gm;


    if (!object['method'] || !methodArr.includes(object['method'])) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!object['uri'] || !uriRegex.test(object['uri'])) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!object['version'] || !versionArr.includes(object['version'])) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (object['message'] === undefined || messageRegex.test(object['message'])) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return object;
}

console.log(solve({
    method: 'GET',
    uri: 'for..of',
    version: 'HTTP/1.1',
    message: ''
}));