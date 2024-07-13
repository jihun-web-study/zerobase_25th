import ShortestPath from "./shortest_path.mjs";

let path = new ShortestPath();

console.log("\n== init ==\n", path);

let vertices = ["A", "B", "C", "D", "E"];
let edges = [
  ["A", "B", 10],
  ["A", "C", 3],
  ["B", "C", 1],
  ["B", "D", 2],
  ["C", "B", 4],
  ["C", "D", 8],
  ["C", "E", 2],
  ["D", "E", 7],
  ["E", "D", 9],
];

vertices.forEach((v) => path.addVertex(v));
console.log("\n== add vertex ==\n", path);

edges.forEach(([srcVertex, dstVertex, weight]) => path.addEdge(srcVertex, dstVertex, weight));
console.log("\n== add edge ==\n", path);

console.log(`\n== dijkstra ==\n`);
vertices.forEach((v) => console.log(v, path.dijkstra(v)));

console.log(`\n== floydWarshall ==\n`, path.floydWarshall());
