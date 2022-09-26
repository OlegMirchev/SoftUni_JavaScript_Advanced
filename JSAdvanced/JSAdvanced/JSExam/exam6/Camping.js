class SummerCamp {
    constructor(organizer, location) {
        this.organizer = organizer;
        this.location = location;
        this.priceForTheCamp = { "child": 150, "student": 300, "collegian": 500 };
        this.listOfParticipants = [];
    }

    registerParticipant(name, condition, money) {
        let participant = {};

        if (!this.priceForTheCamp.hasOwnProperty(condition)) {
            throw new Error('Unsuccessful registration at the camp.');
        }

        if (money < this.priceForTheCamp[condition]) {
            return 'The money is not enough to pay the stay at the camp.';
        }

        if (this.listOfParticipants.some(n => n.name === name)) {
            return `The ${name} is already registered at the camp.`;
        }

        participant = { name, condition, power: 100, wins: 0 };

        this.listOfParticipants.push(participant);

        return `The ${name} was successfully registered.`;
    }

    unregisterParticipant(name) {
        if (!this.listOfParticipants.some(n => n.name === name)) {
            throw new Error(`The ${name} is not registered in the camp.`);
        }

        this.listOfParticipants = this.listOfParticipants.filter(n => n.name !== name);

        return `The ${name} removed successfully.`;
    }

    timeToPlay(typeOfGame, participant1, participant2) {
        let condition1 = '';
        let condition2 = '';
        let power1 = 0;
        let power2 = 0;
        let winner1 = 0;
        let winner2 = 0;

        if (typeOfGame === 'WaterBalloonFights') {
            if (!this.listOfParticipants.some(n => n.name === participant1) || !this.listOfParticipants.some(n => n.name === participant2)) {
                throw new Error('Invalid entered name/s.');
            }

            for (const participants of this.listOfParticipants) {
                if (participants.name === participant1) {
                    condition1 = participants.condition;
                    power1 = participants.power;
                    winner1 = participants.wins;
                } else if (participants.name === participant2) {
                    condition2 = participants.condition;
                    power2 = participants.power;
                    winner2 = participants.wins;
                }
            }

            if (condition1 !== condition2) {
                throw new Error('Choose players with equal condition.');
                //return 'Choose players with equal condition.';
            }

            for (const par of this.listOfParticipants) {
                if (par.name === participant1) {
                    if (power1 > power2) {
                        par.wins++;

                        return `The ${participant1} is winner in the game ${typeOfGame}.`;
                    }
                } else if (par.name === participant2) {
                    if (power2 > power1) {
                        par.wins++;

                        return `The ${participant2} is winner in the game ${typeOfGame}.`;
                    }
                }
            }

            return 'There is no winner.';

        } else if (typeOfGame === 'Battleship') {
            if (!this.listOfParticipants.some(n => n.name === participant1)) {
                throw new Error('Invalid entered name/s.');
            }

            for (const participants of this.listOfParticipants) {
                if (participants.name === participant1) {
                    participants.power += 20;
                }
            }

            return `The ${participant1} successfully completed the game ${typeOfGame}.`;
        }
    }

    toString() {
        let result = [];

        result.push(`${this.organizer} will take ${this.listOfParticipants.length} participants on camping to ${this.location}`);

        this.listOfParticipants = this.listOfParticipants.sort((a, b) => b.wins - a.wins);

        for (const participant of this.listOfParticipants) {
            result.push(`${participant.name} - ${participant.condition} - ${participant.power} - ${participant.wins}`);
        }

        return result.join('\n');
    }
}

const summerCamp = new SummerCamp("Jane Austen", "Pancharevo Sofia 1137, Bulgaria");
console.log(summerCamp.registerParticipant("Petar Petarson", "student", 300));
console.log(summerCamp.timeToPlay("Battleship", "Petar Petarson"));
console.log(summerCamp.registerParticipant("Sara Dickinson", "child", 200));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Sara Dickinson"));
console.log(summerCamp.registerParticipant("Dimitur Kostov", "student", 300));
console.log(summerCamp.timeToPlay("WaterBalloonFights", "Petar Petarson", "Dimitur Kostov"));

console.log(summerCamp.toString());