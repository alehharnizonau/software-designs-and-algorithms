import {Comparable} from "./Comparable";

export abstract class Item implements Comparable<Item> {
    static idCounter: number = 0;
    readonly name: string;
    readonly id: number;
    public value: number;
    public weight: number;

    constructor(name: string, value: number, weight: number) {
        this.name = name;
        this.value = value;
        this.weight = weight;
        Item.idCounter += 1;
        this.id = Item.idCounter;
    }

    public static resetIdCounter(): void {
        Item.idCounter = 0;
    }

    public compareTo(other: Item): number {
        const key = other instanceof Item ? 'value' : 'weight';
        if (this[key] > other[key]) {
            return 1;
        }

        if (this[key] < other[key]) {
            return -1;
        }

        return this.name.localeCompare(other.name);
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value.toFixed(2)}, Weight: ${this.weight.toFixed(2)}`
    }

    public getId(): number {
        return this.id;
    }
}