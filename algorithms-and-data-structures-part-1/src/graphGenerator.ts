import {Vertex} from "./Vertex";
import {Edge} from "./Edge";
import {WeightedGraph} from "./WeightedGraph";

const vertex1 = new Vertex('1');
const vertex2 = new Vertex('2');
const vertex3 = new Vertex('3');
const vertex4 = new Vertex('4');

const vertices: Vertex[] = [
    vertex1,
    vertex2,
    vertex3,
    vertex4
];

const edges: Edge[] = [
    new Edge(vertex1, vertex4, 3),
    new Edge(vertex1, vertex2, 5),
    new Edge(vertex1, vertex3, 4),
    new Edge(vertex2, vertex4, 6),
    new Edge(vertex2, vertex3, 5),
];
const graph: WeightedGraph = new WeightedGraph();

vertices.forEach(v => graph.addVertex(v.key));
edges.forEach(edge => graph.addEdge(edge.from, edge.to, edge.weight));

console.log(graph);