function solve(array) {

    let hereos = [];

    for (const data of array) {
        let [name, level, items] = data.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        hereos.push({name, level, items});
    }

    console.log(JSON.stringify(hereos));
}

solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']);