import {Comparable} from "./Comparable";

export abstract class Item implements Comparable<Item> {
    static idCounter: number = 0;
    readonly name: string;
    value: number;
    weight: number;
    readonly id: number;

    constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        Item.idCounter += 1;
        this.id = Item.idCounter;
    }

    static resetIdCounter(): void {
        Item.idCounter = 0;
    }

    compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1
        }

        if (this.value < other.value) {
            return -1;
        }

        return this.name.localeCompare(other.name)
    }

    toString() {
        return `${this.name} - Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`
    }

    getId(): number {
        return this.id;
    }
}