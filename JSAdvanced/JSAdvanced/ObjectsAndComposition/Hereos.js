function solve() {

    let fighter = (name) => {
        let state = {
            name,
            health: 100,
            stamina: 100,
            fight() {
                console.log(`${state.name} slashes at the foe!`);
                this.stamina--;
            }
        }
        return state;
    }

    let mage = (name) => {
        let state = {
            name,
            health: 100,
            mana: 100,
            cast(spell) {
                console.log(`${state.name} cast ${spell}`);
                this.mana--;
            }
        }
        return state;
    }

    return { fighter: fighter, mage: mage };
}

let create = solve();
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");
scorcher2.fight()

console.log(scorcher2.stamina);
console.log(scorcher.mana);
