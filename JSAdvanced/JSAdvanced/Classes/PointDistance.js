class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        let p_x = Number(p1.x - p2.x);
        let p_y = Number(p1.y - p2.y);

        return Math.sqrt(p_x ** 2 + p_y ** 2);
    }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));