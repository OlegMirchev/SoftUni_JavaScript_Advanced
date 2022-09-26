class List {
    // result = [];
    constructor() {
        this.result = [];
        this.size = this.result.length;
    }

    add(element) {
        this.result.push(element);
        this.size++;
        this.result.sort((a, b) => a-b);
    }

    remove(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index');
        }
        this.size--;
        return this.result.splice(index, 1);
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            throw new Error('Invalid index');
        }

        return this.result[index];
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));