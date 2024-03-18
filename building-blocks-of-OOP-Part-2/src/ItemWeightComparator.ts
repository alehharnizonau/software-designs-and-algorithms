import {ItemComparator} from "./ItemComparator";
import {Item} from "./Item";

export class ItemWeightComparator implements ItemComparator {
    public compare(first: Item, second: Item): number {
        return first.compareTo(second);
    }
}