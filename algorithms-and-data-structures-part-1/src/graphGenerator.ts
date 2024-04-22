import {Vertex} from "./Vertex";
import {Edge} from "./Edge";
import {WeightedGraph} from "./WeightedGraph";

export const vertex1 = new Vertex('1');
export const vertex2 = new Vertex('2');
export const vertex3 = new Vertex('3');
export const vertex4 = new Vertex('4');
export const vertex5 = new Vertex('5');

export const vertices: Vertex[] = [
    vertex1,
    vertex2,
    vertex3,
    vertex4,
    vertex5
];

const edges: Edge[] = [
    new Edge(vertex1, vertex4, 3),
    new Edge(vertex1, vertex2, 5),
    new Edge(vertex1, vertex3, 4),
    new Edge(vertex2, vertex4, 6),
    new Edge(vertex2, vertex3, 5),
];
export const graph: WeightedGraph = new WeightedGraph();

graph.addVertices(vertices);

vertices.forEach((v: Vertex) => graph.addVertex(v.key));
edges.forEach((edge: Edge) => graph.addEdge(edge.from, edge.to, edge.weight));