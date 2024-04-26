import {IVertex, Vertex} from "./Vertex";

export interface IWeightedGraph<T> {
    addVertex(key: string): void;

    addEdge(vertex1: T, vertex2: T, weight: number): void;
}

export class WeightedGraph implements IWeightedGraph<IVertex> {
    public adjacencyList: Map<string, Map<string, number>>;
    public vertices: Vertex[] = [];

    constructor() {
        this.adjacencyList = new Map();
    }

    public addVertex(key: string): void {
        this.adjacencyList.set(key, new Map());
    }

    public addEdge(vertex1: IVertex, vertex2: IVertex, weight: number): void {
        this.adjacencyList.get(vertex1.key).set(vertex2.key, weight);
        this.adjacencyList.get(vertex2.key).set(vertex1.key, weight);
    }

    public addVertices(vertices: Vertex[]): void {
        this.vertices = vertices;
    }
}