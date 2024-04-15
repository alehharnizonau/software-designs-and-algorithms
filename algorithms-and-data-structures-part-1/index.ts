import {Dijkstra} from "./src/Dijkstra";
import {graph, vertex1, vertex3, vertex4, vertex5} from "./src/graphGenerator";

const dijkstra: Dijkstra = new Dijkstra(graph);

console.log(dijkstra.findShortestPath(vertex4, vertex3));// { path: ['4', '1', '3'], distance: 7 }
console.log(dijkstra.findShortestPath(vertex1, vertex5)); // { path: [], distance: Infinity }
console.log(dijkstra.findShortestPath(vertex1, vertex1)); // { path: ['1'], distance: 0 }

console.log(dijkstra.findAllShortestPaths(vertex4));

/*
  {
    '1': { path: ['4', '1'], distance: 3 },
    '2': { path: ['4', '2'], distance: 6 },
    '3': { path: ['4', '1', '3'], distance: 7 },
    '5': { path: [], distance: Infinity }
  }
 */


