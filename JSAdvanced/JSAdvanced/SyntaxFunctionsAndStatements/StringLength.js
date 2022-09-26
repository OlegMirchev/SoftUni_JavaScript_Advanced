function printSting(word1, word2, word3) {
    let word1Length = word1.length;
    let word2Length = word2.length;
    let word3Length = word3.length;

    let sumLength = word1Length + word2Length + word3Length;
    let averageLength = Math.floor(sumLength / 3);

    console.log(sumLength);
    console.log(averageLength);
}

printSting('chocolate', 'ice cream', 'cake');