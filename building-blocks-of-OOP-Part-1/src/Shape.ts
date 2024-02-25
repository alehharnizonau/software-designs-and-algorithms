import {Point} from "./Point";

export abstract class Shape {
    points: Point[];
    protected color: string;
    protected filled: boolean;

    constructor(points: Point[]);
    constructor(points: Point[], color?: string, filled?: boolean) {
        if (points.length < 3) {
            throw new Error()
        }

        this.points = points;
        this.color = color || 'green';
        this.filled = filled === undefined ? true : filled;
    }

    toString() {
        return `A Shape with color of ${this.color} and ${this.filled ? 'filled' : 'not filled'}. Points: ${this.points.join(', ')}.`
    }

    getPerimeter() {
        return this.points.reduce((acc, cum, index) => this.points.length === index
            ? acc + cum.distance(this.points[0])
            : acc + cum.distance(this.points[index + 1]), 0);
    }

    abstract getType(): string;
}
