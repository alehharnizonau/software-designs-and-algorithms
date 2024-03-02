import {ItemComparator} from "./ItemComparator";
import {Item} from "./Item";

export class ItemWeightComparator implements ItemComparator {
    compare(first: Item, second: Item): number {
        return first.compareTo(second);
    }
}