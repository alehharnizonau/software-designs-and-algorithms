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

    private left(): number {
        return 2 * this.index + 1
    };

    private right(): number {
        return 2 * this.index + 2
    };

    private getChild(): number {
        return this.right() < this.size() && this.comparator(this.left(), this.right()) > 0
            ? this.right()
            : this.left()
    };

    private getParent(): number {
        return Math.ceil(this.index / 2) - 1
    }

    private comparator = (i1: number, i2: number): number => this.minHeap[i1].priority - this.minHeap[i2].priority;

    private bubbleUp(): void {
        this.index = this.size() - 1;

        while (this.getParent() >= 0 && this.comparator(this.getParent(), this.index) > 0) {
            this.swap(this.getParent(), this.index);
            this.index = this.getParent();
        }
    }

    private bubbleDown() {
        this.index = 0;

        while (this.left() < this.size() && this.comparator(this.index, this.getChild()) > 0) {
            this.swap(this.index, this.getChild());
            this.index = this.getChild();
        }
    }

    private swap(i1: number, i2: number): void {
        [this.minHeap[i1], this.minHeap[i2]] = [this.minHeap[i2], this.minHeap[i1]];
    }
}