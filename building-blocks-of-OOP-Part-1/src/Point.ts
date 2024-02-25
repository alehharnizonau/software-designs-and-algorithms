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
    distance(x?: number | Point, y?: number): number {
        if (!arguments.length) {
            return this.calculate(this.x, this.y);
        }

        if (x instanceof Point) {
            const [x1, y1] = x.toString().replace(/[\(\)\s]/g, "").split(',');
            return this.calculate(Number(x1), Number(y1), this.x, this.y);
        }

        return this.calculate(this.x, this.y, x, y);
    }

    calculate(x2, y2, x1 = 0, y1 = 0) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}