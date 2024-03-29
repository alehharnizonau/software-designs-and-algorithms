interface Points {
    x1: number;
    x2: number;
    y1: number;
    y2: number;
}

export class Point {
    x: number;
    y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    toString() {
        return `(${this.x}, ${this.y})`
    }

    distance(): number;
    distance(x: Point): number;
    distance(x: number, y: number): number;
    distance(...args: undefined | [Point] | [number, number]): number {
        if (args[0] instanceof Point) {
            const [x1, y1] = args[0].toString().replace(/[\(\)\s]/g, "").split(',');
            return this.calculate({x2: Number(x1), y2: Number(y1), x1: this.x, y1: this.y});
        }

        return this.calculate({x2: this.x, y2: this.y, x1: args[0] || 0, y1: args[1] || 0});
    }

    calculate({x1, x2, y1, y2}: Points): number {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}