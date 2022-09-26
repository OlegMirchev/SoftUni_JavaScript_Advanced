function solve(array) {

    let products = [];

    for (const infoTown of array) {
      let [town, product, price] = infoTown.split(' | ');

      if (products.filter(p => p.product === product).length > 0) {
        let object = products.find(p => p.product === product);

        if (object.price > Number(price)) {
          object.town = town;
          object.price = price;
        }
      }else {
        let object = {town, product, price:Number(price)}
        products.push(object);
      }
    }

    for (const obj of products) {
      console.log(`${obj.product} -> ${obj.price} (${obj.town})`);
    }
}

solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']);