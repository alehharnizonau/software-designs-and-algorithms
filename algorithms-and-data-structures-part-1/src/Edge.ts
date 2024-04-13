import {IVertex} from "./Vertex";

interface IEdge<T> {
    from: T;
    to: T;
    weight: number;
}

export class Edge implements IEdge<IVertex> {
    public from: IVertex;
    public to: IVertex;
    public weight: number;

    constructor(from: IVertex, to: IVertex, weight: number) {
        this.from = from;
        this.to = to;
        this.weight = weight;
    }
}