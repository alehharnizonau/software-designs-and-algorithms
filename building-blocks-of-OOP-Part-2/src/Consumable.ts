import {Item} from "./Item";

export class Consumable extends Item {
    isConsumed: boolean;
    isSpoiled: boolean;

    constructor(name: string, value: number, weight: number, isSpoiled = false) {
        super(name, value, weight);
        this.isSpoiled = isSpoiled;
        this.isConsumed = false;
    }

    use(): string {
        if (this.isConsumed) {
            return `There's nothing left of the ${this.name} to consume.`
        }

        return this.isSpoiled
            ? `You consumed the ${this.name}.\nYou feel sick.`
            : `You consumed the ${this.name}.`
    }
}