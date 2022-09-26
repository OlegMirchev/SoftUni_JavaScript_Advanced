function factory(face, suit) {

    let card = {};
    let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let suits = ['S', 'H', 'D', 'C'];

    if (faces.includes(face) && suits.includes(suit)) {
        if (suit === 'S') {
            suit = '\u2660';
        } else if (suit === 'H') {
            suit = '\u2665';
        } else if (suit === 'D') {
            suit = '\u2666';
        } else if (suit === 'C') {
            suit = '\u2663';
        }

        card = {
            face,
            suit,
            toString() {
                console.log(this.face + this.suit);
            }
        };
    } else {
        throw new Error('Error');
    }

    return card;
}

factory('1', 'C').toString();