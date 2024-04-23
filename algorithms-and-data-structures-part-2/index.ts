import {PriorityQueue} from "./src/PriorityQueue";

const pq = new PriorityQueue<string>();

pq.enqueue('a', 9);
pq.enqueue('b', 8);
pq.enqueue('c', 7);
pq.enqueue('d', 6);
pq.enqueue('e', 5);
pq.enqueue('f', 4);
pq.enqueue('d', 3);
pq.enqueue('e', 2);
pq.enqueue('f', 1);

console.log(pq.size());
console.log(pq.minHeap);
pq.dequeue();
console.log(pq.size());
console.log(pq.minHeap);

