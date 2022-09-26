function extract(content) {

    let textElement = document.getElementById(content);
    let cities = [];

    let pattern = /(\(([A-z ]+)\))/g;
    let matcher = textElement.textContent.matchAll(pattern);
    
    for (const match of matcher) {
        cities.push(match[2]);
    }

    return cities.join('; ');
}