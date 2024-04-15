import {IVertex, Vertex} from "./Vertex";
import {WeightedGraph} from "./WeightedGraph";

interface Path {
    path: string[];
    distance: number;
}

interface IDijkstra<T> {
    findShortestPath(vertex1: T, vertex2: T): Path;

    findAllShortestPaths(vertex: T): Record<string, Path>;
}

interface IState {
    [key: string]: {
        distance: number;
        prevNode: string;
    }
}

export class Dijkstra implements IDijkstra<IVertex> {
    private visitedNodes: string[] = [];
    private graph: WeightedGraph;
    private state: IState;
    private unvisitedNodes: string[] = [];
    private currentNode: string = '';

    constructor(graph: WeightedGraph) {
        this.graph = graph;
    }

    public findShortestPath(vertex1: IVertex, vertex2: IVertex): Path {
        this.currentNode = vertex1.key;
        this.getInitialState(this.currentNode);
        if (vertex1.key === vertex2.key) {
            return this.getShortestPath(vertex1.key, vertex2.key)
        }

        while (this.unvisitedNodes.length !== 1) {
            const neighbours: string[] = this.getNeighbours();
            neighbours.forEach((node: string): void => {
                const distance: number = this.getDistance(node);
                const shortestDistance: number = this.state[node].distance;
                if (distance < shortestDistance) {
                    this.state[node].distance = distance;
                    this.state[node].prevNode = this.currentNode;
                }
            })

            this.unvisitedNodes = this.getUnvisitedNodes();
            this.visitedNodes.push(this.currentNode);
            this.currentNode = this.getCurrentNode(neighbours);
        }

        return this.getShortestPath(vertex1.key, vertex2.key);
    }

    findAllShortestPaths(vertex: IVertex): Record<string, Path> {
        this.currentNode = vertex.key;

        return this.getVertices().reduce((acc, cur: Vertex): Record<string, Path> => {
            return {
                ...acc, [cur.key]: this.findShortestPath(vertex, cur)
            }
        }, {});
    };

    private getVertices(): Vertex[] {
        return this.graph.vertices.filter((v: Vertex): boolean => v.key !== this.currentNode);
    }

    private getInitialState(startNode): void {
        this.visitedNodes = [];
        this.unvisitedNodes = Array.from(this.graph.adjacencyList.keys());
        this.state = this.unvisitedNodes.reduce((acc, cur: string): IState =>
                ({
                    ...acc, [cur]: {
                        'distance': cur === startNode ? 0 : Infinity,
                        'prevNode': ''
                    }
                })
            , {});
    }

    private getNeighbours(): string[] {
        return Array.from(this.graph.adjacencyList.get(this.currentNode).keys())
            .filter((node: string) => !this.visitedNodes.includes(node));
    }

    private getShortestPath(startNode: string, endNode: string): Path {
        let prevNode: string = this.state[endNode].prevNode;
        const path: string[] = prevNode ? [endNode] : [];
        while (prevNode && prevNode !== startNode) {
            path.push(prevNode);
            prevNode = this.state[prevNode].prevNode;
        }

        if (prevNode || startNode === endNode) {
            path.push(startNode);
        }

        return {
            path: path.reverse(),
            distance: this.state[endNode].distance
        }
    }

    private getUnvisitedNodes(): string[] {
        return this.unvisitedNodes.filter((node: string): boolean => node !== this.currentNode);
    }

    private getDistance(neighbour: string): number {
        const distance: number = this.graph.adjacencyList.get(this.currentNode).get(neighbour);
        return this.state[this.currentNode].prevNode
            ? distance + this.state[this.currentNode].distance
            : distance;
    }

    private getCurrentNode(nodes: string[]): string {
        let min: number = this.state[nodes[0]]?.distance || Infinity;
        let current: string = nodes[0];
        nodes.forEach((node: string): void => {
            if (this.state[node].distance < min) {
                min = this.state[node].distance;
                current = node;
            }
        })

        return current;
    }
}