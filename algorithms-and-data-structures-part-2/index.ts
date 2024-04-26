import {PriorityQueue} from "./src/PriorityQueue";

const pq = new PriorityQueue<string>();

pq.enqueue('p2', 2);
pq.enqueue('p2', 2);
pq.enqueue('p2', 2);
pq.enqueue('p2', 2);
pq.enqueue('p2', 2);
pq.enqueue('p2', 2);
pq.enqueue('p2', 2);
pq.enqueue('p2', 2);
pq.enqueue('p2', 2);
pq.enqueue('p2', 2);
pq.enqueue('p1', 1);
pq.enqueue('p1', 1);
pq.enqueue('p1', 1);
pq.enqueue('p1', 1);
pq.enqueue('p1', 1);

console.log(pq.size());
console.log(pq.minHeap);
while (pq.size() > 0) {
    console.log(pq.dequeue())
    console.log(pq.minHeap);
}

