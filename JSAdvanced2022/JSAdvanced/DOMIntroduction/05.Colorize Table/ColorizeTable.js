function colorize() {
   
    let tableElements = document.getElementsByTagName('tr');

    let arrayFromElements = Array.from(tableElements);

    arrayFromElements.forEach((e, i) => {
        if (i % 2 !== 0) {
            e.style.backgroundColor = 'teal';
        }
    });
}