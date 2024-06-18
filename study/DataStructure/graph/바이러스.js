import Queue from "./../queues/queue/queue.js";
import Stack from "../stack/stack.js";

class Graph {
  constructor() {
    this.edge = {};
    this.visited = {};
  }

  addVertex(vertex) {
    this.edge[vertex] = [];
    this.visited[vertex] = false;
  }

  addEdge(vertex1, vertex2) {
    // 무방향 그래프
    this.edge[vertex1].push(vertex2);
    this.edge[vertex2].push(vertex1);
  }

  dfs(vertex) {
    if (this.visited[vertex]) return;

    this.visited[vertex] = true;
    let neighbors = this.edge[vertex];
    for (const neighbor of neighbors) {
      this.dfs(neighbor);
    }
  }
}

let graph = new Graph();

let input = [
  7,
  [
    [1, 2],
    [2, 3],
    [1, 5],
    [1, 5],
    [5, 2],
    [5, 6],
    [4, 7],
  ],
];

for (let i = 1; i <= input[0]; i++) {
  graph.addVertex(i);
}

console.log(`\n==== Add Edge ====`);
input[1].forEach(([pc1, pc2]) => graph.addEdge(pc1, pc2));
graph.dfs(1);
const visited = graph.visited;
console.log(visited);
console.log(Object.entries(visited).filter(([key, value]) => value === true).length);
