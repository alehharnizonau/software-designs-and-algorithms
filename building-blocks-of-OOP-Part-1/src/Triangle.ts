import {Shape} from "./Shape";
import {Point} from "./Point";

export class Triangle extends Shape {
    constructor(...args: Point[]) {
        super(args);
        this.points = [args[0], args[1], args[2]];
        if (this.points.length !== 3) {
            throw new Error();
        }
    }

    toString(): string {
        return `Triangle[${this.points.map((p, i) => `v${i + 1}=${p.toString()}`)}]`
    }

    getType(): string {
        const sideLengths = this.points.map((p, i) => this.points.length === i
            ? p.distance(this.points[0]).toFixed(2)
            : p.distance(this.points[i + 1]).toFixed(2)
        )
        const equalSides = Array.from(new Set(sideLengths)).length;

        switch (equalSides) {
            case 1:
                return 'equilateral triangle';
            case 2:
                return 'isosceles triangle';
            default:
                return 'scalene triangle';
        }
    }
}