import {PriorityQueue} from "./PriorityQueue";

type TaskFn = () => Promise<any>;

export interface SchedulerI {
    postTask(task: TaskFn, priority: number): void;

    run(): Promise<void>;
}

export class Scheduler implements SchedulerI {
    public pq: PriorityQueue<TaskFn> = new PriorityQueue<TaskFn>();

    public postTask(task: TaskFn, priority: number): void {
        this.pq.enqueue(task, priority);
    }

    public run(): Promise<void> {
        while (this.pq.size() > 0) {
            const task: TaskFn = this.pq.dequeue();
            task();
        }
        return Promise.resolve();
    }
}
