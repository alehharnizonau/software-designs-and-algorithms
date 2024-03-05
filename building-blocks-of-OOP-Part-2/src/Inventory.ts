import {Item} from "./Item";
import {ItemComparator} from "./ItemComparator";

export class Inventory {
    private items: Item[] = [];

    public addItem(item: Item): void {
        this.items = [...this.items, item];
    }

    public toString(): string {
        return this.items.map(item => item.toString()).join(', ');
    }

    public sort(comparator?: ItemComparator): Item[] {
        return comparator
            ? this.items.sort(comparator.compare)
            : this.items.sort((a, b) => a.value - b.value)
    }
}