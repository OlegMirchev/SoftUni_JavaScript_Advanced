function printDeckOfCards(cards) {

    function createCard() {
        let card = [];
        let faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        let suits = ['S', 'H', 'D', 'C'];

        for (const c of cards) {
            let suit = c.slice(c.length - 1);
            let face = c.slice(0, c.length - 1);

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

                card.push(face + suit);
            } else {
                console.log(`Invalid card: ${c}`);
                return;
            }
        }
        console.log(card.join(' '));
    }
    createCard();
}

printDeckOfCards(['5S', '3D', 'QD', '1C']);