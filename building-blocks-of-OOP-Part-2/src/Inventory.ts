import {Item} from "./Item";
import {ItemComparator} from "./ItemComparator";

export class Inventory {
    items: Item[] = [];

    addItem(item: Item) {
        this.items = [...this.items, item];
    }

    toString() {
        return this.items.map(item => item.toString()).join(', ');
    }

    sort(comparator?: ItemComparator) {
        return comparator
            ? this.items.sort(comparator.compare)
            : this.items.sort((a, b) => a.value - b.value)
    }
}