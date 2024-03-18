import {Consumable} from "./Consumable";

export class Pizza extends Consumable {
    readonly numberOfSlices: number;
    private numberOfEatenSlices: number = 0;

    constructor(value: number, weight: number, isSpoiled: boolean, numberOfSlices: number) {
        super('pizza', value, weight, isSpoiled);
        this.numberOfSlices = numberOfSlices;
    }

    public getNumberOfEatenSlices(): number {
        return this.numberOfEatenSlices;
    }

    public use(): string {
        if (this.numberOfSlices - this.numberOfEatenSlices > 0) {
            this.numberOfEatenSlices += 1;
            return 'You consumed a slice of the pizza.'
        }

        return `There's nothing left of the pizza to consume.`
    }
}