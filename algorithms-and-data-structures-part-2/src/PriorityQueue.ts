interface PriorityQueueI<T> {
    enqueue(value: T, priority: number): void;

    dequeue(): T | undefined;

    size(): number;
}

export class PriorityQueue<T> implements PriorityQueueI<T> {
    minHeap: { value: T, priority: number }[] = [];
    private index: number = 0;

    public enqueue(value: T, priority: number): void {
        this.minHeap.push({value, priority});
        this.bubbleUp();
    }

    public dequeue(): T | undefined {
        if (this.size()) {
            this.swap(0, this.size() - 1);
            const {value} = this.minHeap.pop();
            this.bubbleDown();
            return value;
        }
    }

    public size(): number {
        return this.minHeap.length;
    }

    private parentIndex(): number {
        return Math.ceil(this.index / 2) - 1;
    }

    private bubbleUp(): void {
        this.index = this.size() - 1;

        while (this.parentIndex() >= 0 && this.comparator(this.parentIndex(), this.index) > 0) {
            const parentIndex: number = this.parentIndex();
            this.swap(parentIndex, this.index);
            this.index = parentIndex;
        }
    }

    private leftChildIndex(): number {
        return 2 * this.index + 1;
    }

    private rightChildIndex(): number {
        return 2 * this.index + 2;
    }

    private hasChild(index: number): boolean {
        return index < this.size();
    }

    private getChildIndex(): number {
        return (this.hasChild(this.rightChildIndex()) && this.comparator(this.leftChildIndex(), this.rightChildIndex()) > 0
            ? this.rightChildIndex()
            : this.leftChildIndex());
    }

    private bubbleDown(): void {
        this.index = 0;

        while (this.hasChild(this.leftChildIndex()) && this.comparator(this.index, this.getChildIndex()) > 0) {
            const childIndex: number = this.getChildIndex();
            this.swap(this.index, childIndex);
            this.index = childIndex;
        }
    }

    private comparator = (i1: number, i2: number): number => this.minHeap[i1].priority - this.minHeap[i2].priority;

    private swap(i1: number, i2: number): void {
        [this.minHeap[i1], this.minHeap[i2]] = [this.minHeap[i2], this.minHeap[i1]];
    }
}